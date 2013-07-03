module.exports = function (element) {

  /**
   * clone
   * Return a cloned `Element`.
   *
   * @return {Element}
   * @api public
   */
  
  element.prototype.clone = function () {
    var el = this.el.cloneNode(true);
    return el;
  };

  return element;
};
