import CodeBlock from "../Components/CodeBlock";

const Redux = () => {
  let Store = `import { configureStore } from "@reduxjs/toolkit";
import Your Slice from "./YourSlicePath";

let store = configureStore({
  reducer: {
    YourSliceName:Your Slice  ,
  },
});

export default store;
`;
  let Provider = `import { Provider } from "react-redux";
  
  
  <Provider store={yourStoreName || store}>
  <The Component You Want />
  </Provider>
  `;
  let ReduxLibraries = `npm i react-redux @reduxjs/toolkit`;

  let Slice = `import { createSlice } from "@reduxjs/toolkit";
import { AnotherAction } from "AnotherSlicePath";
let initialState = { value: 0  || Another Data } ;

let YourSliceFileName = createSlice({
  name: "YourSliceName",
  initialState,
  reducers: {
    YourAction: (state, action) => {
      state.value = action.payload || Another Action
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AnotherAction, (state,action) => {
      state.value = action.payload || Another Action
    });
  },
});
export default YourSliceFileName.reducer;
export let { YourAction } = YourSliceFileName.actions;
`;
  let ReduxUseCode = `import { useSelector, useDispatch } from "react-redux";
let YourSliceName = useSelector((state) => state.YourSliceName);
let dispatch = useDispatch();
dispatch(YourSliceName.YourAction(Your Data));
`;
  return (
    <>
      <div className="w-1/2 text-center mx-auto border border-black p-5 mb-3">
        <h1 className="text-6xl bold mb-2">Store</h1>
        <h3 className="py-2">Simple Code To Store</h3>
        <CodeBlock code={Store} />
        <h1 className="mt-4 mb-2 text-3xl bold text-red-600">
          Not Forget To Install This Libraries
        </h1>
        <CodeBlock code={ReduxLibraries} />
        <h1 className="mt-4 mb-2 text-3xl bold text-red-600">
          Not Forget To Add This
        </h1>
        <CodeBlock code={Provider} />
      </div>
      <div className="w-1/2 text-center mx-auto border border-black p-5 mb-3">
        <h1 className="text-6xl bold mb-2">Slice</h1>
        <h3 className="py-2">Simple Code To Slice</h3>
        <CodeBlock code={Slice} />
      </div>
      <div className="w-1/2 text-center mx-auto border border-black p-5 mb-10">
        <h1 className="text-6xl bold mb-2">To Use Redux</h1>
        <CodeBlock code={ReduxUseCode} />
      </div>
    </>
  );
};

export default Redux;
