const products = require('../products.json');

module.exports = (req, res) => {
  const { category } = req.query;
  
  if (category && category !== 'all') {
    const filteredProducts = products.filter(product => product.category === category);
    res.status(200).json(filteredProducts);
  } else {
    res.status(200).json(products);
  }
};