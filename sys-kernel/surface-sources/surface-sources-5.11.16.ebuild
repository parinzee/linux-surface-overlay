# Copyright 1999-2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI="6"
ETYPE="sources"
K_SECURITY_UNSUPPORTED="1"
K_WANT_GENPATCHES="base extras experimental"
K_GENPATCHES_VER="19"

inherit kernel-2
inherit eutils
detect_version
detect_arch

KEYWORDS="~amd64"
HOMEPAGE="https://github.com/linux-surface/linux-surface"
IUSE="experimental"
DESCRIPTION="Full sources including the Gentoo and Surface patchset for the ${KV_MAJOR}.${KV_MINOR} kernel tree."
SRC_URI="${KERNEL_URI} ${GENPATCHES_URI} ${ARCH_URI}
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0001-surface3-oemb.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0002-wifi.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0003-ipts.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0004-surface-sam-over-hid.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0005-surface-sam.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0006-surface-hotplug.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0007-surface-typecover.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0008-surface-sensors.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0009-cameras.patch
		https://raw.githubusercontent.com/linux-surface/linux-surface/master/patches/5.11/0010-ath10k-firmware-override.patch"


src_prepare() {
	eapply "${DISTDIR}/0001-surface3-oemb.patch"
	eapply "${DISTDIR}/0002-wifi.patch"
	eapply "${DISTDIR}/0003-ipts.patch"
	eapply "${DISTDIR}/0004-surface-sam-over-hid.patch"
	eapply "${DISTDIR}/0005-surface-sam.patch"
    eapply "${DISTDIR}/0006-surface-hotplug.patch"
    eapply "${DISTDIR}/0007-surface-typecover.patch"
    eapply "${DISTDIR}/0008-surface-sensors.patch"
    eapply "${DISTDIR}/0009-cameras.patch"
 	eapply "${DISTDIR}/0010-ath10k-firmware-override.patch"
	eapply_user
}

pkg_setup() {
	ewarn ""
	ewarn "${PN} is *not* supported by the Gentoo Kernel Project in any way."
	ewarn "If you need support, please contact the overlay developers directly."
	ewarn "Do *not* open bugs in Gentoo's bugzilla unless you have issues with"
	ewarn "the ebuilds. Thank you."
	ewarn ""
}

pkg_postinst() {
	kernel-2_pkg_postinst
	einfo "For more info on this patchset, and how to report problems, see:"
	einfo "${HOMEPAGE}"
}

pkg_postrm() {
	kernel-2_pkg_postrm
}
