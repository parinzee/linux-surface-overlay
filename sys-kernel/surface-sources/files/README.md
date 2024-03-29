# Linux Patches for Microsoft Surface Devices

Patches are grouped in directory by kernel version and inside those directories split up in patch-sets based on their functionality.
They should be used with the appropriate config fragments from the `/configs/<version>` directory.

These patches are generated from the `-surface` branches of our [kernel repository][1].
Please direct any pull-requests for new patches and kernel functionality to this repository, targetting the latest `-surface-devel` branch.

## Maintained Versions

The currently maintained versions are
- [`6.1`](https://github.com/linux-surface/kernel/tree/v6.1-surface) (latest Fedora)
- [`6.2`](https://github.com/linux-surface/kernel/tree/v6.2-surface) (latest Arch Linux / Ubuntu)

Any other versions are only included for historical purposes.
Unmaintained versions will likely (if necessary with a bit of re-basing) still work, but will not have the latest changes (so please don't report bugs for those).

[1]: https://github.com/linux-surface/kernel
