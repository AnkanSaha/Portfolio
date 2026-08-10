// Original stylized homage to a "colorful circular browser" icon — not a
// trace of Google's trademarked Chrome logo, whose exact artwork isn't ours
// to reuse (same policy applied to the Kali dragon mark elsewhere in this app).
export default function ChromeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#e6e6e6" />
      <path d="M12 2a10 10 0 0 1 8.66 5H12a5 5 0 0 0-4.33 2.5L3.34 7A10 10 0 0 1 12 2Z" fill="#EA4335" />
      <path d="M20.66 7A10 10 0 0 1 16.33 19.5L12 12l4.33-2.5H20.66Z" fill="#FBBC05" />
      <path d="M3.34 7 7.67 14.5 12 22a10 10 0 0 1-8.66-15Z" fill="#34A853" />
      <circle cx="12" cy="12" r="4" fill="#4285F4" stroke="#e6e6e6" strokeWidth="1.2" />
    </svg>
  );
}
