import { AutoAwesome, Search } from "@mui/icons-material";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Axios from "../api/axios";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { numberWithCommas } from "../utils";

export default function Shop() {
  const [searchParams] = useSearchParams();

  const [searchState, setSearchState] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const {
    data: {
      raw_text_products: dataProductsRT = [],
      ai_products: dataProductsAI = [],
    } = [],
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ["search", searchState],
    queryFn: async () =>
      (
        await Axios.get(`/search`, {
          params: { query: searchState ? searchState : undefined },
        })
      ).data,
  });

  const handleSearch = ({ search }) => {
    setSearchState(search);
    refetchProducts();
  };

  useEffect(() => {
    if (searchParams.get("query")) {
      setSearchState(searchParams.get("query"));
      setValue("search", searchParams.get("query"));
    }
  }, [searchParams]);

  return (
    <div>
      <nav className="bg-[#1A1423] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.webp" className="h-8" alt="logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button type="button" variant="outlined" color="primary">
              Get started
            </Button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Trang Chủ
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Về chúng tôi
                </a>
              </li>
              <li>
                <Link
                  to="#shop"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cửa hàng
                </Link>
              </li>
              <li>
                <a
                  href="#footer"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="carousel relative container mx-auto">
        <div className="carousel-inner relative overflow-hidden w-full">
          <input
            className="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div className="carousel-item absolute opacity-0">
            <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">
                    Stripy Zig Zag Jigsaw Pillow and Duvet Set
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-3"
            className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-2"
            className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          <input
            className="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div className="carousel-item absolute opacity-0 bg-cover bg-right">
            <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">
                    Real Bamboo Wall Clock
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-1"
            className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-3"
            className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          <input
            className="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div className="carousel-item absolute opacity-0">
            <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom">
              <div className="container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                  <p className="text-black text-2xl my-4">
                    Brown and blue hardbound book
                  </p>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="#"
                  >
                    view product
                  </a>
                </div>
              </div>
            </div>
          </div>
          <label
            htmlFor="carousel-2"
            className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
          >
            ‹
          </label>
          <label
            htmlFor="carousel-1"
            className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
          >
            ›
          </label>

          <ol className="carousel-indicators">
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-1"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-2"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
            <li className="inline-block mr-3">
              <label
                htmlFor="carousel-3"
                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>

      <section className="bg-white py-8" id="shop">
        <div className="container mx-auto pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <Link
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                to="/shop"
              >
                Cửa hàng
              </Link>

              <div className="flex items-center" id="store-nav-content">
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>
              </div>
            </div>

            <form className="mx-6" onSubmit={handleSubmit(handleSearch)}>
              <TextField
                id="product-search"
                label="Tìm kiếm sản phẩm"
                fullWidth
                size="small"
                value={watch("search")}
                {...register("search", { required: "Vui lòng nhập từ khóa" })}
                error={!!errors.search}
                helperText={errors.search?.message}
              />
            </form>
          </nav>

          <div className="min-h-[50vh]">
            {isLoadingProducts && (
              <div className="flex items-center justify-center py-10">
                <CircularProgress />
              </div>
            )}
            {dataProductsAI?.length > 0 && (
              <div className="my-5">
                <h2 className="text-xl font-medium ">
                  Kết quả tìm kiếm thông minh từ AI{" "}
                  <AutoAwesome className="text-primary" />
                </h2>
                <div className="flex w-full max-w-full overflow-x-auto">
                  {dataProductsAI.map((product) => (
                    <div
                      className="p-6 flex flex-col xl:min-w-[25%] lg:min-w-[33%] md:min-w-[50%] min-w-full"
                      key={product.id}
                    >
                      <a
                        href={`https://edu-is336.odoo.com/shop/${product.id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={"data:image/jpg;base64," + product.image_256}
                          className="h-64 w-full object-contain"
                        />
                      </a>
                      <div className="pt-3 flex items-start justify-between">
                        <a
                          className="h-[60px] text-primary"
                          href={`https://edu-is336.odoo.com/shop/${product.id}`}
                          target="_blank"
                          rel="noreferrer"
                          dangerouslySetInnerHTML={{ __html: product.name }}
                        ></a>
                        <svg
                          className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="pt-1 text-gray-900">
                          {numberWithCommas(product.list_price)}₫
                        </p>
                        <a
                          href={`https://edu-is336.odoo.com/shop/${product.id}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button variant="contained" color="primary">
                            Mua
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {dataProductsRT?.length > 0 &&
                dataProductsRT.map((product) => (
                  <div className="w-full p-6 flex flex-col" key={product.id}>
                    <a
                      href={`https://edu-is336.odoo.com/shop/${product.id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={"data:image/jpg;base64," + product.image_256}
                        className="h-64 w-full object-contain"
                      />
                    </a>
                    <div className="pt-3 flex items-start justify-between">
                      <a
                        className="h-[60px] text-primary"
                        href={`https://edu-is336.odoo.com/shop/${product.id}`}
                        target="_blank"
                        rel="noreferrer"
                        dangerouslySetInnerHTML={{ __html: product.name }}
                      ></a>
                      <svg
                        className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="pt-1 text-gray-900">
                        {numberWithCommas(product.list_price)}₫
                      </p>
                      <a
                        href={`https://edu-is336.odoo.com/shop/${product.id}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="contained" color="primary">
                          Mua
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8" id="about">
        <div className="container py-8 px-6 mx-auto">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="#"
          >
            About
          </a>

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur
            <a href="#">random link</a> adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Vel risus commodo
            viverra maecenas accumsan lacus vel facilisis volutpat. Vitae
            aliquet nec ullamcorper sit. Nullam eget felis eget nunc lobortis
            mattis aliquam. In est ante in nibh mauris. Egestas congue quisque
            egestas diam in. Facilisi nullam vehicula ipsum a arcu. Nec nam
            aliquam sem et tortor consequat. Eget mi proin sed libero enim sed
            faucibus turpis in. Hac habitasse platea dictumst quisque. In
            aliquam sem fringilla ut. Gravida rutrum quisque non tellus orci ac
            auctor augue mauris. Accumsan lacus vel facilisis volutpat est velit
            egestas dui id. At tempor commodo ullamcorper a. Volutpat commodo
            sed egestas egestas fringilla. Vitae congue eu consequat ac.
          </p>
        </div>
      </section>

      <footer
        className="container mx-auto bg-white py-8 border-t border-gray-400"
        id="footer"
      >
        <div className="container flex px-3 py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2">
              <div className="px-3 md:px-0">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas vel mi ut felis tempus commodo nec id erat.
                  Suspendisse consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
              <div className="px-3 md:px-0">
                <h3 className="text-left font-bold text-gray-900">Social</h3>

                <div className="w-full flex items-center py-4 mt-0">
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                    </svg>
                  </a>
                  <a href="#" className="mx-2">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
