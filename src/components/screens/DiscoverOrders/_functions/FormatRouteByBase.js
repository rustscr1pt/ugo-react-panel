export default function format_route_by_base(filterCondition, sourceType) {
    console.log("activated")
    // eslint-disable-next-line default-case
    switch (filterCondition) {
        case true:
            if (sourceType === "ugo-vape") {
                return "/api/orders/page/filtered"
            }
            else {
                return "/api/walgreen/walgreen_requests/filtered/page"
            }
        case false:
            if (sourceType === "ugo-vape") {
                return "/api/orders/get/page"
            }
            else {
                return "/api/walgreen/walgreen_requests/get/page"
            }
    }
}
