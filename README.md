The FilterableProductTable component manages the state.

When the user types in the search bar or toggles the checkbox, the state is updated using the setFilterText and setInStockOnly functions.

The updated state is passed down as props to the SearchBar and ProductTable components.

For example, the filterText state is passed to the SearchBar to display the current search term and to the ProductTable to filter the products.

The SearchBar component uses the filterText and inStockOnly props to control the input fields' values.

The ProductTable component uses the filterText and inStockOnly props to filter and display the appropriate products.

When the user interacts with the SearchBar, the SearchBar calls the onFilterTextChange or onInStockOnlyChange functions passed down as props.

These functions update the state in the FilterableProductTable component, which triggers a re-render of the entire component tree.

Example:
The user types "apple" in the search bar.

The SearchBar calls onFilterTextChange("apple"), which updates the filterText state in FilterableProductTable.

The updated filterText is passed as a prop to ProductTable.

ProductTable filters the products to show only those containing "apple" and re-renders the table.
