# Copyright 2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=7

inherit meson

DESCRIPTION="Userspace daemon for Intel Precise Touch & Stylus"
HOMEPAGE="https://github.com/linux-surface/iptsd"
SRC_URI="https://github.com/linux-surface/${PN}/releases/download/v${PV}/${P}-1-x86_64.pkg.tar.zst"

LICENSE="GPL-2"
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE="systemd"

DEPEND="dev-libs/inih"
RDEPEND="${DEPEND}"
BDEPEND="dev-util/ninja sys-devel/gcc dev-util/meson"

S="${WORKDIR}/${PN}-${P}"

src_unpack() {
	unpack ${P}-1-x86_64.pkg.tar.zst
}

src_configure() {
	local emesonargs=(
		$(meson_use systemd servicemanager=systemd)
		$(meson_use -systemd servicemanager=openrc)
	)
	meson_src_configure
}

src_compile() {
	meson_src_compile
	eninja -C ${S}/build
}
src_install() {
	eninja -C ${S}/build install
}
