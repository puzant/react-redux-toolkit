import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  shops: [
    {id: '542-111-643', name: 'Nike', logo: 'https://thumbs.dreamstime.com/b/web-183282388.jpg', image: 'https://images.indianexpress.com/2022/05/Nike-cryptokicks.jpg'},
    {id: '623-642-233', name: 'Apple', logo: 'https://live.staticflickr.com/8294/7579327416_023e6647f6_b.jpg', image: 'https://cdn.mos.cms.futurecdn.net/ritx9zUhQgUJ7fVo4DxNUK.jpg'},
    {id: '555-333-666', name: 'Samsung', logo: 'https://seeklogo.com/images/S/samsung-logo-7FCC326D74-seeklogo.com.png', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6azWlGMI5Szl9anHSzZXy4fh8Uv7ufEgwFA&usqp=CAU'},
    {id: '112-743-654', name: 'Xiaomi', logo: 'https://www.freepnglogos.com/uploads/xiaomi-png/xiaomi-svg-png-icon-download-12.png', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/160349-phones-review-xiaomi-12-pro-review-image3-j1afztmn4j.jpg'}
  ],
  products: [
    {id: '498-234-243', name: 'Fendi Bag', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', image: 'https://static.fendi.com/dam/is/image/fendi/8BH386ABVLF14N1_01', price: 12},
    {id: '894-342-653', name: 'Iphone 12 Pro', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', image: 'https://namzyphones.com/wp-content/uploads/2022/01/apple_iphone_13_azul_02_ad_l.jpg', price: 300},
    {id: '524-762-876', name: 'JBL Speakers', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', image: 'https://www.phonefinity.net/wp-content/uploads/jbl-charge-5-9.jpg', price: 55},
    {id: '223-512-653', name: 'Rolex Watch', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-men-s-watches-rolex-1652431528.png?crop=1xw:1xh;center,top&resize=480:*', price: 120},
    {id: '541-451-612', name: 'Backpack', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', image: 'https://www.helikon-tex.com/media/catalog/product/cache/4/image/500x/17f82f742ffe127f42dca9de82fb58b1/p/l/pl-dtn-nl-1919.jpg', price: 20},
    {id: '900-342-432', name: 'Milkshake', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex', image: 'https://www.biggerbolderbaking.com/wp-content/uploads/2015/05/BBB71-Homemade-Ice-Cream-Milkshakes-Thumbnail-v.1.jpg', price: 35},
  ]
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
})

export default productsSlice.reducer
