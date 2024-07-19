document.addEventListener("DOMContentLoaded", function () {
    const data = "data/produtos.json";
    fetch(data)
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productCard = `
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div class="card h-100 text-center">
                            <img src="${product.image}" class="card-img-top" alt="${product.name}">
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 class="card-title text-titlecard">${product.name}</h5>
                                    <p class="card-text text-descriptioncard">${product.description}</p>
                                </div>
                                <div class="d-flex justify-content-center mt-3">
                                        <a href="${product.storeLink}" class="btn btn-papelzinho mt-auto">Ir para a Loja</a>
                                </div>
                            </div>
                        </div>
                    </div>



                `;
                productList.innerHTML += productCard;
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
});
