import "../Css/Index.css"

function HeaderUser() {
    return (
        <>
            <header className="header flex items-center justify-center  top-0 py-4-5 h-max ">
                <div className="container">
                    <div
                        className="header-wrapper items-center flex justify-between gap-3 lg:grid lg:gap-2 lg:grid-cols-[3fr_6fr_3fr] flex-wrap ">
                        <div className="flex gap-2 items-center transition-all duration-150">
                            <div className="xl:hidden menu-opener">
                                <portal-opener>
                                    <button
                                        type="button"
                                        data-portal="#menu-drawer"
                                        className="hamburger-button inline-flex  items-center  justify-center flex-col gap-1  w-[3.6rem] h-[3.6rem] border border-neutral-50 h rounded-full hover:bg-neutral-50 active:scale-95 transition-all duration-150"
                                        id="toggle-menu-mobile"
                                        aria-label="menu-button"
                                    >

                                        <span className="h-[2px] w-5 bg-neutral-200"></span>

                                        <span className="h-[2px] w-5 bg-neutral-200"></span>

                                        <span className="h-[2px] w-5 bg-neutral-200"></span>

                                    </button>
                                </portal-opener>
                            </div>
                            <a href="/" className="logo-wrapper" title="EGA Gear">

                                <img src="//bizweb.dktcdn.net/100/502/483/themes/941751/assets/logo.png?1712722184442"
                                     alt="logo EGA Gear" width="144"
                                     height="34"></img>

                            </a>
                        </div>

                        <div className="mx-auto header-search hidden md:block order-1 lg:order-none">
                            <div className="search-bar relative hidden md:block">
                                <quick-search className="quick-search">
                                    <form
                                        action="/search"
                                        method="get"
                                        className="m-0 flex bg-background pl-5 py-3 rounded-full items-center relative border border-neutral-50"
                                        role="search"
                                    >

                                        <select
                                            className="form-select border-0 focus:ring-transparent collection-options"
                                            aria-label="Danh mục sản phẩm"
                                        >
                                            <option value="">Danh mục sản phẩm</option>


                                            <option value="3255942"> Bàn phím cơ</option>

                                            <option value="3255943"> Chuột & Lót chuột</option>

                                            <option value="3257310"> Tai nghe</option>


                                            <option value="3257358"> Playstation 5</option>

                                        </select>

                                        <div className="search-input-group w-full relative">
                                            <input
                                                type="text"
                                                name="query"
                                                autoComplete="off"
                                                className="border-0 bg-transparent focus:ring-transparent p-0 w-full text-base text-foreground"
                                                required
                                                data-placeholder="Tìm theo tên sản phẩm...; Tìm theo thương hiệu...;"
                                                placeholder="Tìm theo tên sản phẩm..."
                                            ></input>
                                            <button
                                                type="submit"
                                                aria-label="search"
                                                className="search-button btn rounded-0 right-0 flex items-center justify-center text-foreground rounded-tr-full rounded-br-full absolute   bg-[var(--color-search)] text-white"
                                            >
                                                <i className="icon icon-search"></i>
                                            </button>
                                        </div>

                                    </form>
                                    <div
                                        className="search-dropdown absolute bottom-0 top-full mt-1 left-0 bg-background rounded-lg py-3 text-foreground w-full px-2">
                                        <div
                                            className="search-loading absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 w-full h-full z-[1] bg-background flex items-center justify-center">
		  <span className="loading-icon gap-1 hidden items-center justify-center">

            <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>

            <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>

            <span className="w-1.5 h-1.5 bg-[currentColor] rounded-full animate-pulse"></span>

</span>
                                        </div>

                                        <div className="search-result space-y-3">
                                        </div>


                                        <div className="search-history-list border-neutral-50"></div>


                                        <div className="search-keywords space-y-2 pt-2 px-2 ">
                                            <span className="text-primary font-semibold">Từ khóa phổ biến</span>

                                            <div className="search-keyword-list flex gap-1 items-center flex-wrap">

                                                <a href="/search?q=M%C3%A1y+t%C3%ADnh+b%E1%BA%A3ng&type=product"
                                                   className="search-keyword text-secondary px-3 py-1 bg-relative rounded-full inline-flex items-center justify-center hover:border-secondary border border-transparent"
                                                   title="">
                                                    Máy tính bảng
                                                </a>

                                                <a href="/search?q=+%C4%90i%E1%BB%87n+tho%E1%BA%A1i&type=product"
                                                   className="search-keyword text-secondary px-3 py-1 bg-relative rounded-full inline-flex items-center justify-center hover:border-secondary border border-transparent"
                                                   title="">
                                                    Điện thoại
                                                </a>

                                                <a href="/search?q=+S%E1%BA%A1c+d%E1%BB%B1+ph%C3%B2ng&type=product"
                                                   className="search-keyword text-secondary px-3 py-1 bg-relative rounded-full inline-flex items-center justify-center hover:border-secondary border border-transparent"
                                                   title="">
                                                    Sạc dự phòng
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </quick-search>
                            </div>
                        </div>
                        <div
                            className="header-icon-wrapper flex items-center ml-auto gap-0 lg:gap-5 xl:gap-[var(--spacing-7)] ">
                            <portal-opener className=" search-opener block md:hidden">
                                <a data-portal="#search-drawer" href="/search" title="tìm kiếm"
                                   className="header-icon-group flex gap-2 items-center search-group  hover:bg-neutral-50 active:scale-95 transition-all duration-150 px-2 py-1 rounded-sm ">
                                    <div
                                        className="header-icon w-[3.6rem] h-[3.6rem] p-2 rounded-sm flex items-center justify-center border border-neutral-50">
                                        <i className="icon icon-search"></i>
                                    </div>
                                </a>
                            </portal-opener>

                            <a href="/login" title="Đăng nhập"
                               className="header-icon-group hidden md:flex gap-2 items-center account-group  hover:bg-neutral-50 active:scale-95 transition-all duration-150 px-2 py-1 rounded-sm ">
                                <div
                                    className="header-icon w-[3.6rem] h-[3.6rem] p-2 rounded-sm flex items-center justify-center border border-neutral-50">
                                    <i className="icon icon-user"></i>
                                </div>
                                <div className=" hidden xl:block ">
                                    <span className="text-xs">Tài khoản</span>
                                    <span className="font-semibold block">Đăng nhập</span>
                                </div>
                            </a>

                            <portal-opener>
                                <a data-portal="#cart-drawer" href="/cart" title="Giỏ hàng"
                                   className="mini-cart header-icon-group flex gap-2 items-center cart-group  hover:bg-neutral-50 active:scale-95 transition-all duration-150  md:px-2 pl-2 py-1 rounded-sm">
                                    <div
                                        className="header-icon w-[3.6rem] h-[3.6rem]  p-2 rounded-sm flex items-center justify-center relative border border-neutral-50">
                                        <i className="icon icon-cart"></i>
                                        <span
                                            className="cart-count  flex items-center count_item count_item_pr justify-center rounded-full absolute font-semibold">1</span>
                                    </div>
                                    <div className=" block hidden md:block">
                                        <span className="text-xs ">Giỏ hàng</span>
                                        <span className="font-semibold hidden block  price count_item ">1</span>
                                    </div>
                                </a>
                            </portal-opener>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderUser;