/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "wvnqeoueuivvawjkumrg.supabase.co",
                pathname: "**"
            }
        ]
    },
}

module.exports = nextConfig
