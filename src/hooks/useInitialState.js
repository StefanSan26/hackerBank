import React from "react";

const initialState="2019-11-29"
const useInitialState = ()=>{

	const [state,setState]  = React.useState(initialState)

	return {state,setState}
}
export default useInitialState	