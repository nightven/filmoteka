!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n),n.register("2bcf7",(function(e,t){n("kRnHx");var r=n("4LMMA"),i=n("1KhuP"),a=document.querySelector(".js-container-favorite");a.addEventListener("click",(function(e){if(!e.target.classList.contains("js-btn-delete"))return;var t=e.target.closest(".js-card"),n=Number(t.dataset.id);t.remove();var i=(0,r.getStatus)().filter((function(e){return e.id!==n}));(0,r.saveNewData)(i)}));var o=(0,r.getStatus)();o.length&&(a.innerHTML=(0,i.createMarkupFavorite)(o))})),n("2bcf7")}();
//# sourceMappingURL=favorite.7f6f9d7f.js.map