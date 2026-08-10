export const SHUTDOWN_LOG: string[] = [
  "Stopping Kali Linux Display Manager...",
  "Stopping Network Manager...",
  "Stopping Bluetooth service...",
  "Unmounting /boot/efi...",
  "Unmounting /home...",
  "Reached target Shutdown.",
];

export const SHUTDOWN_STAGE_MS = {
  log: 1300,
  blackout: 500,
  closeAttempt: 400,
};
