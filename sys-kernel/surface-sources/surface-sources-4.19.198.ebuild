# Copyright 1999-2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI="7"
ETYPE="sources"
K_SECURITY_UNSUPPORTED="1"
K_WANT_GENPATCHES="base extras experimental"
K_GENPATCHES_VER="197"

inherit kernel-2
detect_version
detect_arch

KEYWORDS="amd64"
HOMEPAGE="https://github.com/linux-surface/linux-surface"
IUSE="experimental"

DESCRIPTION="Full sources including the Gentoo and Surface patchset for the ${KV_MAJOR}.${KV_MINOR} kernel tree."
SRC_URI="${KERNEL_URI} ${GENPATCHES_URI} ${ARCH_URI}"

src_prepare() {
	eapply "${FILESDIR}/4.19/0001-surface3-power.patch"
	eapply "${FILESDIR}/4.19/0002-surface3-touchscreen-dma-fix.patch"
	eapply "${FILESDIR}/4.19/0003-surface3-oemb.patch"
	eapply "${FILESDIR}/4.19/0004-surface-buttons.patch"
	eapply "${FILESDIR}/4.19/0005-suspend.patch"
	eapply "${FILESDIR}/4.19/0006-ipts.patch"
	eapply "${FILESDIR}/4.19/0007-wifi.patch"
	eapply "${FILESDIR}/4.19/0008-surface-gpe.patch"
	eapply "${FILESDIR}/4.19/0009-surface-sam-over-hid.patch"
	eapply "${FILESDIR}/4.19/0010-surface-sam.patch"
	eapply "${FILESDIR}/4.19/0011-surface-hotplug.patch"
	eapply "${FILESDIR}/4.19/0012-surface-typecover.patch"
	eapply "${FILESDIR}/4.19/0013-surface-go-touchscreen.patch"
	eapply "${FILESDIR}/4.19/0014-ath10k-firmware-override.patch"
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
