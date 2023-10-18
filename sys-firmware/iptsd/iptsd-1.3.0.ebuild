# Copyright 1999-2023 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=8

inherit meson systemd

DESCRIPTION="A userspace daemon for the Intel Precise Touch & Stylus technology"
HOMEPAGE="https://github.com/linux-surface/iptsd"
SRC_URI="https://github.com/linux-surface/${PN}/archive/v${PV}.tar.gz -> ${P}.tar.gz"

LICENSE="GPL-2"
SLOT="0"
KEYWORDS="~amd64"
IUSE=""

DEPEND="dev-libs/hidapi dev-cpp/cli11 dev-libs/spdlog sys-libs/hidrd dev-cpp/ms-gsl dev-libs/inih"
RDEPEND="${DEPEND}"
BDEPEND="dev-util/ninja sys-devel/gcc dev-util/meson"

src_configure() {
	meson_src_configure
}

src_install() {
	meson_src_install
	systemd_dounit "${FILESDIR}/iptsd.service"
	systemd_dotmpfiles "${FILESDIR}/iptsd.conf"
}

pkg_postinst() {
	ewarn ""
	ewarn "Currently only systemd is supported."
	ewarn "Use without systemd is possible, but needs to be configured manually."
	ewarn "Please refer to the iptsd repo for instructions"
	ewarn "${HOMEPAGE}"
	ewarn ""
}