import SelectedOptions from "./selectedOptions.js";

function ProductDetail({ $target, initialState }) {
  const $productDetail = document.createElement("div");
  $productDetail.className = "ProductDetail";

  $target.appendChild($productDetail);

  this.state = initialState;

  let selectedOptions = null;
  let isInitalized = false;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();

    if (selectedOptions) {
      selectedOptions.setState({
        product: this.state.product,
        selectedOptions: this.state.selectedOptions,
      });
    }
  };

  this.render = () => {
    const { product } = this.state;
    if (!isInitalized) {
      $productDetail.innerHTML = `
        <img src="${product.imageUrl}">
        <div class="ProductDetail__info">
            <h2>${product.name}</h2>
            <div class="ProductDetail__price">${product.price}원~</div>
            <select>
                <option>선택하세요.</option>
                ${product.productOptions
                  .map(
                    (option) => `
                    <option value="${option.id}" ${
                      option.stock === 0 ? "disable" : ""
                    }>
                        ${option.stock === 0 ? "(품절)" : ""}${product.name} ${
                      option.name
                    } ${option.price > 0 ? `(+${option.price}원)` : ""}
                    </option>
                `
                  )
                  .join("")}
            </select>
            <div class="ProductDetail__selectedOptions"></div>
        </div>
        `;
      selectedOptions = new SelectedOptions({
        $target: $productDetail.querySelector(
          ".ProductDetail__selectedOptions"
        ),
        initialState: {
          product: this.state.product,
          selectedOptions: this.state.selectedOptions,
        },
      });
      isInitalized = true;
    }
  };
  this.render();

  $productDetail.addEventListener("change", (e) => {
    if (e.target.tagName === "SELECT") {
      const selectedOptionId = e.target.value / 1;
      const { product, selectedOptions } = this.state;
      const option = product.productOptions.find(
        (option) => option.id === selectedOptionId
      );
      const selectedOption = selectedOptions.find(
        (selectOption) => selectOption.optionId === selectedOptionId
      );
      if (option && !selectedOption) {
        const nextSelectedOptions = [
          ...selectedOptions,
          {
            productId: product.id,
            optionId: option.id,
            optionName: option.name,
            optionPrice: option.price,
            quantity: 1,
          },
        ];
        this.setState({
          ...this.state,
          selectedOptions: nextSelectedOptions,
        });
      }
    }
  });
}
export default ProductDetail;
