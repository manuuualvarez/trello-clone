import { OrganizationProfile } from '@clerk/nextjs'

const Settings = () => {
  return (
    <div className='w-full'>
      <OrganizationProfile
        appearance={{
            elements: {
                rootBox: {
                    
                    width: "100%",
                },
                card: {
                    border: "1px solid #E5E5E5",
                    width: "100%",
                }
            }
        }}
      />
    </div>
  )
}

export default Settings
