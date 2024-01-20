This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Install Dependencies

First, run the command to install  all dependencies
npm install


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

------------------------------------|---------|----------|---------|---------|-------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------------------|---------|----------|---------|---------|-------------------
All files                           |   73.75 |    58.33 |   64.51 |   77.11 |                   
 provider/redux                     |   35.89 |      100 |       0 |      40 |                   
  modalSlice.ts                     |   45.45 |      100 |       0 |   55.55 | 14-22             
  userSlice.ts                      |   32.14 |      100 |       0 |   34.61 | 29-59,68          
 src/app/components/AllProducts     |     100 |      100 |     100 |     100 |                   
  page.tsx                          |     100 |      100 |     100 |     100 |                   
 src/app/components/Products        |     100 |      100 |     100 |     100 |                   
  page.tsx                          |     100 |      100 |     100 |     100 |                   
 src/app/components/SelectedProduct |     100 |      100 |     100 |     100 |                   
  page.tsx                          |     100 |      100 |     100 |     100 |                   
 src/app/components/ShoppingCar     |   84.61 |      100 |   33.33 |    90.9 |                   
  page.tsx                          |   84.61 |      100 |   33.33 |    90.9 | 15                
 src/app/lib/data                   |   66.66 |      100 |     100 |     100 |                   
  index.ts                          |   66.66 |      100 |     100 |     100 |                   
 src/app/lib/data/apifake           |   52.94 |        0 |   33.33 |   61.53 |                   
  find_all_products.ts              |   83.33 |      100 |     100 |      80 | 7                 
  find_id_transaction.ts            |   33.33 |        0 |       0 |      40 | 4-7               
  find_one_user.ts                  |      40 |        0 |       0 |   66.66 | 4                 
 src/app/lib/mocks                  |     100 |      100 |     100 |     100 |                   
  mockProducts.js                   |     100 |      100 |     100 |     100 |                   
 src/app/lib/util                   |     100 |        0 |     100 |     100 |                   
  formatMoney.ts                    |     100 |        0 |     100 |     100 | 1                 
------------------------------------|---------|----------|---------|---------|-------------------