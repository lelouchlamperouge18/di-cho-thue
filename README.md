# DICHOTHUE_FRONT_END

## Libraries/Tools
* ReactJS (Next.js base) https://nextjs.org/
* Redux (Toolkit) https://redux-toolkit.js.org/introduction/quick-start
* UI library: Material UI (v4) https://v4.mui.com/getting-started/installation/

## How to start
1. Run the following command (the first time)
```bash
npm install
# or
yarn install 
```
2. Run the following command then open https://localhost:3000
```bash
npm run dev
```

## About folder structure
(Updating...)
* /public: contains assets logo/images/videos/... of website

* /src:
1. /src/app/store.js: store of application (redux) - nơi import tên những feature
2. /src/components: định nghĩa các component (no use redux)
(Gồm file `.js` làm UI và file `.module.css` để tạo CSS)
3. /src/features: định nghĩa các component (use redux)
(Tương tự components, có thêm file `ten-componentSlice.js` để quản lí state)
- /src/pages: định nghĩa các pages của trang web (MOST IMPORTANT)
1. _app.js: root pages contains all components. (don't edit this)
2. index.js: index page (i.e. `https://localhost:3000`)
3. about.js => page `https://localhost:3000/about`
4. contact.js => page `https://localhost:3000/contact`
5. api/auth/[...nextauth].js => eg. page `https://localhost:3000/apu/auth/signin` (for login/logout with Google account)
(See more about dynamic and nested routes: https://nextjs.org/docs/routing/dynamic-routes)
6. ...
- /src/styles: định nghĩa CSS cho các pages
1. globals.css: những CSS chung cho toàn bộ trang web
2. Home.module.css: CSS cho page index.js (vì trong pages/index.js ta import component tên Home)
3. About.module.css: CSS cho page /about
4. Contact.module.css: CSS cho page /contact
5. ...

## Flow
* Làm việc chung trên branch `main`, không thay đổi, chỉnh sửa code của người khác.
* Hard coding
* Tạo các components (không sử dụng ở nhiều page): định nghĩa trong /components (gồm 2 files `.js` và `.module.css`)
* Tạo các components (tái sử dụng, giá trị ở page này dùng ở nhiều page khác): định nghĩa trong /features (gồm 3 files)
* Tạo các pages: trong /pages (1 file `.js`)
* Khi tạo page thì tạo file `.module.css` tương ứng ở folder /styles
* Some remarkable Nextjs features: 
1. Tag `<Link>, <Image>, <Head>`
2. getStaticProps: https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
3. getServerSideProps: https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
4. Dynamic Routes: https://nextjs.org/docs/routing/dynamic-routes
❤️