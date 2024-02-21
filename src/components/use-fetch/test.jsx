import useFetch from "./index";

const UseFetchHookTest = () => {
    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products",
        {}
    );

    console.log(data, error, loading);

    return (
        <div>
            <h1>Use FetchHook Test</h1>
            {loading ? <h3>Loading ! Please wait</h3> : null}
            {error ? <h3>{error}</h3> : null}
            {data && data.products && data.products.length
                ? data.products.map((productItem, index) => (
                    <p key={index}>{productItem.title}</p>
                ))
                : null}
        </div>
        )
};

export default UseFetchHookTest;