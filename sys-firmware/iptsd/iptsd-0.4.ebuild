# Copyright 2021 Gentoo Authors
# Distributed under the terms of the GNU General Public License v2

EAPI=7

inherit meson
inherit eutils
inherit ninja-utils

DESCRIPTION="Userspace daemon for Intel Precise Touch & Stylus"
HOMEPAGE="https://github.com/linux-surface/iptsd"
SRC_URI="https://github.com/linux-surface/iptsd/archive/refs/heads/master.zip"

LICENSE="GPL-2+"
SLOT="0"
KEYWORDS="~amd64 ~x86"
IUSE="systemd"

DEPEND="dev-libs/inih"
RDEPEND="${DEPEND}"
BDEPEND="dev-util/ninja sys-devel/gcc dev-util/meson"

src_unpack() {
	unpack ${DISTDIR}/master.zip
}

S="${WORKDIR}/${PN}-master"

src_prepare() {
	eapply "${FILESDIR}/meson.patch"
	eapply_user
}

src_configure() {
	local emesonargs=(
		$(meson_use systemd)
	)
	meson_src_configure
}

src_compile() {
	meson_src_compile
	eninja -C ${WORKDIR}/${P}-build
}

src_install() {
	DESTDIR="${D}" eninja -C ${WORKDIR}/${P}-build install
	#ninja -C ${WORKDIR}/${P}-build install
}
