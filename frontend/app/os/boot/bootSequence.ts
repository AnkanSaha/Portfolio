export const GRUB_ENTRIES = [
  "Kali GNU/Linux",
  "Advanced options for Kali GNU/Linux",
  "Memory test (memtest86+x64.efi)",
];

export const BOOT_LOG: string[] = [
  "Started Load Kernel Modules.",
  "Mounted /boot/efi.",
  "Started Journal Service.",
  "Started udev Kernel Device Manager.",
  "Reached target Local File Systems.",
  "Starting Network Manager...",
  "Started Network Manager.",
  "Reached target Network.",
  "Starting Bluetooth service...",
  "Started Bluetooth service.",
  "Starting Light Display Manager...",
  "Started D-Bus System Message Bus.",
  "Reached target Sound Card.",
  "Started Kali Linux Display Manager.",
  "Reached target Graphical Interface.",
  "Reached target Multi-User System.",
];

export const BOOT_STAGE_MS = {
  grub: 350,
  log: 700,
  splash: 550,
};
