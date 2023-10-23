import localFont from "next/font/local"

export const pretendard = localFont({
  src: [
    {
      path: '../fonts/pretendard/pretendard-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/pretendard/pretendard-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/pretendard/pretendard-bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})