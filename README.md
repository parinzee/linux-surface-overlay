#### Please star this repo if you liked it
# linux-surface-overlay
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)


Gentoo Overlay with surface kernel and other utilities from linux-surface repo. Packages are currently working, but require further testing!

- [X] Surface-sources
- [X] Iptsd (please test the systemd useflag)
- [X] Hosting this overlay
- [X] Get added to gentoo overlay list
- [X] More utilities from linux-surface
- [ ] Plans to write out a full install guide


# Usage
Use layman or eselect repositiory.

eg:```layman -a linux-surface```

eg:```eselect repository enable linux-surface```


# Packages List
- surface-sources-5.13.4
- surface-sources-lts-4.19.198
- iptsd-0.4
- libwacom-surface-1.9
- surface-control-9999 (I need help for testing this as I don't personally use it).

# Information
- *surface-sources* is the normal gentoo-sources with surface patchsets installed.
- *surface-sources-lts* is the **long term support** version of **surface-sources**.
- *iptsd* is needed for touchscreen support. Please also enable the services after install.
- *libwacom-surface* helps provides better touchscreen support, please install it.
- *surface-control* is a commandline utility to help with controlling your surface device, recommended to install.


