/** @type {import('next').NextConfig} */
const nextConfig = {
  // Component pages read demo sources from disk to show their code.
  outputFileTracingIncludes: {
    "/docs/[name]": ["./demos/**/*"],
  },
}

export default nextConfig
