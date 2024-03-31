# Copyright 1999-2023 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=8

inherit meson linux-info systemd

DESCRIPTION="A userspace daemon for the Intel Precise Touch & Stylus technology"
HOMEPAGE="https://github.com/linux-surface/iptsd"
SRC_URI="https://github.com/linux-surface/${PN}/archive/v${PV}.tar.gz -> ${P}.tar.gz"

LICENSE="GPL-2"
SLOT="0"
KEYWORDS="~amd64"
IUSE=""

DEPEND="dev-libs/hidapi dev-cpp/cli11 dev-libs/spdlog dev-cpp/ms-gsl dev-libs/inih"
RDEPEND="${DEPEND}"
BDEPEND="dev-build/ninja sys-devel/gcc dev-build/meson"

src_configure() {
	meson_src_configure
}

src_install() {
	meson_src_install
	newbin "${FILESDIR}"/sh iptsd-run
	newinitd "${FILESDIR}"/initd iptsd
	systemd_dounit "${FILESDIR}/iptsd.service"
	systemd_dotmpfiles "${FILESDIR}/iptsd.conf"
}

pkg_postinst() {
	if linux_config_exists; then
		if ! linux_chkconfig_present HID_IPTS; then
			ewarn "HID_IPTS is not set in your kernel. It's required for iptsd to work."
		fi
		if ! linux_chkconfig_present HID_ITHC; then
			ewarn "HID_ITHC is not set in your kernel. It's required for newer surface devices."
		fi
	else
		ewarn "Cannot determine configuration of your kernel."
		ewarn "Please ensure that HID_IPTS is enabled. For newer surface devices HID_ITHC is also necessary."
	fi

	ewarn "Currently only systemd is supported by upstream."
	ewarn "For openrc a workaround is used."
	ewarn "If your stylus stops working restart the iptsd service."
}