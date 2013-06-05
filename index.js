
/**
 * clone
 * Return a cloned `Element`.
 *
 * @return {Element}
 * @api public
 */

exports.clone = function () {
  var el = this.el.cloneNode(true);
  return el;
};
