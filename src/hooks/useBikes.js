import { useSelector } from "react-redux"

export default function useBikes() {
    const {items, searchTerm, status} = useSelector((state) => state.bikes);

    const filteredResults = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

    console.log(filteredResults);

    return {filteredResults, status};
}