import { ActionState, FieldErrors } from "@/lib/create-safe-action";
import { useCallback, useState } from "react";



type Action<TInput, TOutput> = (data: TInput) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: string) => void;
    onComplete?: () => void;
}

export const useAction = <TInput, TOutput> (
    action: Action<TInput, TOutput>,
    options: UseActionOptions<TOutput> = {}
) => {
    const [fieldErrors, setfieldErrors] = useState<FieldErrors<TInput> | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [data, setData] = useState<TOutput | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const execute = useCallback(
        async(input: TInput) => {
            setLoading(true);
            try {
                const result = await action(input);
                // We do not receive any result
                if (!result) return;
                // The request has an invalid input or null
                setfieldErrors(result.fieldErrors);
                // The servers response with error
                if (result.error) {
                    setError(result.error);
                    options.onError?.(result.error);
                }
                // The server response with data
                if (result.data) {
                    setData(result.data);
                    options.onSuccess?.(result.data);
                }
            } finally  {
                setLoading(false);
                options.onComplete?.();
            }
        }, [action, options]
    );

    return {
        execute,
        fieldErrors,
        error,
        data,
        loading,
    }
}