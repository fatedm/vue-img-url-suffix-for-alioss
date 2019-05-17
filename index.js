import Vue from 'vue';
import imgUrlSuffix from 'img-url-suffix-for-alioss'

Vue.directive('img-suffix', {
  bind: function(el, binding) {
    var url = el.src;
    var value = binding.value || {};
    if (url) {
      const suffix = imgUrlSuffix(url, value);
      el.src = suffix;
    }
  }
});