var E = (n) => {
  throw TypeError(n);
};
var S = (n, e, t) => e.has(n) || E("Cannot " + t);
var u = (n, e, t) =>
  e.has(n)
    ? E("Cannot add the same private member more than once")
    : e instanceof WeakSet
    ? e.add(n)
    : e.set(n, t);
var r = (n, e, t) => (S(n, e, "access private method"), t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const c of s.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function i(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = t(o);
    fetch(o.href, s);
  }
})();
function k() {
  (function () {
    const n = document.querySelector('meta[name="viewport"]'),
      e = () => {
        const t =
          window.outerWidth > 375
            ? "width=device-width,initial-scale=1"
            : "width=375";
        n.getAttribute("content") !== t && n.setAttribute("content", t);
      };
    addEventListener("resize", e, !1), e();
  })();
}
var l, b, f, _, p, v;
class x {
  constructor() {
    u(this, l);
    (this._anchorElements = document.querySelectorAll(
      'a[href*="#"]:not([href="#"])'
    )),
      r(this, l, b).call(this);
  }
}
(l = new WeakSet()),
  (b = function () {
    this._anchorElements.forEach((e) => {
      e.addEventListener("click", (t) => r(this, l, f).call(this, t, e));
    });
  }),
  (f = function (e, t) {
    const i = t.hash,
      o =
        document.getElementById(decodeURIComponent(i.slice(1))) ||
        (i === "#top" && document.body);
    o &&
      (e.preventDefault(),
      r(this, l, _).call(this, o),
      r(this, l, p).call(this, o),
      i !== "#top" && history.pushState({}, "", i));
  }),
  (_ = function (e) {
    (e.style.scrollMarginBlockStart = r(this, l, v).call(this)),
      e.scrollIntoView({ inline: "end", behavior: "smooth" });
  }),
  (p = function (e) {
    e.focus({ preventScroll: !0 }),
      document.activeElement !== e &&
        (e.setAttribute("tabindex", "-1"), e.focus({ preventScroll: !0 }));
  }),
  (v = function () {
    const e = document.querySelector("[data-fixed-header]");
    if (!e) return 0;
    const { position: t, blockSize: i } = window.getComputedStyle(e);
    return t === "fixed" || t === "sticky" ? i : 0;
  });
function H(n, e) {
  const t = {
      root: e.root || null,
      rootMargin: e.rootMargin,
      threshold: e.threshold || 0,
    },
    i = { onEnter: e.onEnter || (() => {}), onLeave: e.onLeave || (() => {}) };
  let o;
  return (
    (() => {
      const c = (A) => {
        A.forEach((h) => {
          h.isIntersecting ? i.onEnter(h) : i.onLeave(h);
        });
      };
      (o = new IntersectionObserver(c, t)), o.observe(n);
    })(),
    {
      start() {
        o.observe(n);
      },
      stop() {
        o.unobserve(n);
      },
      destroy() {
        o.disconnect();
      },
    }
  );
}
function M() {
  const n = "is-visible";
  document.querySelectorAll(".js-title").forEach((t) => {
    H(t, {
      onEnter: () => {
        t.classList.add(n);
      },
      rootMargin: "-20% 0px",
    }).start();
  });
}
function O() {
  const n = document.querySelector(".js-facility-wrapper"),
    e = document.querySelector(":root");
  window.addEventListener("scroll", () => {
    const t = document.documentElement.clientHeight - n.scrollHeight;
    let i = window.scrollY / t;
    i < -9 && (i = -9), e.style.setProperty("--scroll-progress-wrapper", i);
  });
}
var a, y, w, m, L;
class T {
  constructor(e = {}) {
    u(this, a);
    var t, i;
    (this._originalOptions = e),
      (this._options = {
        buttonElement: e.buttonElement,
        menuElement: e.menuElement,
        overlayElement: e.overlayElement ?? null,
        buttonAriaLabel: {
          opened:
            ((t = e.buttonAriaLabel) == null ? void 0 : t.opened) ??
            "メニューを閉じる",
          closed:
            ((i = e.buttonAriaLabel) == null ? void 0 : i.closed) ??
            "メニューを開く",
        },
        focusTrap: e.focusTrap ?? !0,
        onEnter: e.onEnter !== void 0 ? e.onEnter : () => {},
        onLeave: e.onLeave !== void 0 ? e.onLeave : () => {},
      }),
      (this._buttonElement = this._options.buttonElement),
      (this._menuElement = this._options.menuElement),
      (this._internalLinks =
        this._menuElement !== null
          ? this._menuElement.querySelectorAll('a[href^="#"]:not([href="#"])')
          : null),
      (this._overlayElement = this._options.overlayElement),
      (this._FOCUSABLE_ELEMENTS = [
        "a[href]",
        "area[href]",
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        "select:not([disabled]):not([aria-hidden])",
        "textarea:not([disabled]):not([aria-hidden])",
        "button:not([disabled]):not([aria-hidden])",
        "iframe",
        "object",
        "embed",
        "[contenteditable]",
        '[tabindex]:not([tabindex^="-"])',
      ]),
      (this._drawerMenuState = "disabled"),
      (this._toggleEventHandler = r(this, a, m).bind(this)),
      (this._keyDownEventHandler = r(this, a, L).bind(this)),
      r(this, a, y).call(this);
  }
  enable() {
    this._buttonElement &&
      this._menuElement &&
      this._drawerMenuState === "disabled" &&
      (this._buttonElement.setAttribute(
        "aria-controls",
        this._menuElement.getAttribute("id")
      ),
      this._buttonElement.setAttribute("aria-expanded", "false"),
      this._buttonElement.setAttribute(
        "aria-label",
        this._options.buttonAriaLabel.closed
      ),
      this._menuElement.setAttribute("aria-hidden", "true"),
      this._buttonElement.addEventListener("click", this._toggleEventHandler),
      (this._drawerMenuState = "enabled"));
  }
  disable() {
    this._buttonElement &&
      this._menuElement &&
      this._drawerMenuState === "enabled" &&
      (this._buttonElement.classList.remove("is-open"),
      this._buttonElement.removeAttribute("aria-controls"),
      this._buttonElement.removeAttribute("aria-expanded"),
      this._buttonElement.removeAttribute("aria-label"),
      this._menuElement.classList.remove("is-open"),
      this._menuElement.classList.remove("is-close"),
      this._menuElement.removeAttribute("aria-hidden"),
      this._buttonElement.removeEventListener(
        "click",
        this._toggleEventHandler
      ),
      window.removeEventListener("keydown", this._keyDownEventHandler),
      this._internalLinks.forEach((e) => {
        e.removeEventListener("click", this._toggleEventHandler);
      }),
      this._overlayElement !== null &&
        this._overlayElement.removeEventListener(
          "click",
          this._toggleEventHandler
        ),
      (this._drawerMenuState = "disabled"));
  }
}
(a = new WeakSet()),
  (y = function () {
    r(this, a, w).call(this), this.enable();
  }),
  (w = function () {
    if (!this._buttonElement) throw new Error("ボタンが存在しません。");
    if (!this._menuElement) throw new Error("メニューが存在しません。");
    if (this._buttonElement.parentElement !== this._menuElement.parentElement)
      throw new Error("ボタンとメニューは同じ階層に設置する必要があります。");
    if (this._buttonElement.tagName !== "BUTTON")
      throw new Error(`ボタンにはbutton要素を使用してください。
現在の要素: ${this._buttonElement.tagName.toLowerCase()}要素`);
    if (this._buttonElement.getAttribute("type") !== "button")
      throw new Error('ボタンには 「type="button"」 を設定してください。');
    if (
      !this._menuElement.hasAttribute("id") ||
      this._menuElement.getAttribute("id").length === 0
    )
      throw new Error("メニューにはid属性を設定してください。");
    if (typeof this._options.buttonAriaLabel.opened != "string")
      throw new TypeError(`オプション 「buttonAriaLabel.opened」 には、データ型 「string」 を設定してください。
現在のデータ型: ${typeof this._options.buttonAriaLabel.opened}`);
    if (typeof this._options.buttonAriaLabel.closed != "string")
      throw new TypeError(`オプション 「buttonAriaLabel.closed」 には、データ型 「string」 を設定してください。
現在のデータ型: ${typeof this._options.buttonAriaLabel.closed}`);
    if (typeof this._options.focusTrap != "boolean")
      throw new TypeError(`オプション 「focusTrap」 には、データ型 「boolean」 を設定してください。
現在のデータ型: ${typeof this._options.onEnter}`);
    if (typeof this._options.onEnter != "function")
      throw new TypeError(`オプション 「onEnter」 には、データ型 「function」 を設定してください。
現在のデータ型: ${typeof this._options.onEnter}`);
    if (typeof this._options.onLeave != "function")
      throw new TypeError(`オプション 「onLeave」 には、データ型 「function」 を設定してください。
現在のデータ型: ${typeof this._options.onLeave}`);
  }),
  (m = function () {
    const e = this._buttonElement.classList.contains("is-open");
    this._buttonElement.classList.toggle("is-open", !e),
      this._buttonElement.setAttribute("aria-expanded", !e),
      this._buttonElement.setAttribute(
        "aria-label",
        e
          ? this._options.buttonAriaLabel.closed
          : this._options.buttonAriaLabel.opened
      ),
      this._menuElement.classList.toggle("is-open", !e),
      this._menuElement.classList.toggle("is-close", e),
      this._menuElement.setAttribute("aria-hidden", e),
      e ? this._options.onLeave() : this._options.onEnter(),
      e
        ? window.removeEventListener("keydown", this._keyDownEventHandler)
        : window.addEventListener("keydown", this._keyDownEventHandler),
      e
        ? this._internalLinks.forEach((t) => {
            t.removeEventListener("click", this._toggleEventHandler);
          })
        : this._internalLinks.forEach((t) => {
            t.addEventListener("click", this._toggleEventHandler);
          }),
      this._overlayElement !== null &&
        (e
          ? this._overlayElement.removeEventListener(
              "click",
              this._toggleEventHandler
            )
          : this._overlayElement.addEventListener(
              "click",
              this._toggleEventHandler
            ));
  }),
  (L = function (e) {
    const t = this._menuElement.querySelectorAll(this._FOCUSABLE_ELEMENTS),
      i = t[t.length - 1];
    this._menuElement.classList.contains("is-open") &&
      (this._options.focusTrap &&
        e.key === "Tab" &&
        (e.shiftKey
          ? document.activeElement === this._buttonElement &&
            (e.preventDefault(), i.focus())
          : document.activeElement === i &&
            (e.preventDefault(), this._buttonElement.focus())),
      e.key === "Escape" &&
        (r(this, a, m).call(this), this._buttonElement.focus()));
  });
class F {
  constructor() {
    (this._bodyElement = document.body),
      (this._scrollY = 0),
      (this._previousStyle = ""),
      (this._isScrollFixed = !1);
  }
  fixed() {
    this._isScrollFixed !== !0 &&
      ((this._previousStyle = this._bodyElement.getAttribute("style") || ""),
      (this._scrollY = window.scrollY),
      Object.assign(this._bodyElement.style, {
        overflowY: "scroll",
        position: "fixed",
        top: `-${this._scrollY}px`,
        left: "0",
        width: "100%",
        height: "100%",
      }),
      (this._isScrollFixed = !0));
  }
  unfixed() {
    this._isScrollFixed !== !1 &&
      (this._bodyElement.setAttribute("style", this._previousStyle),
      window.scrollTo(0, this._scrollY),
      (this._isScrollFixed = !1));
  }
}
var d, g;
class q {
  constructor(e = {}) {
    u(this, d);
    (this._options = {
      breakpoint: e.breakpoint || null,
      onEnter: e.onEnter || (() => {}),
      onLeave: e.onLeave || (() => {}),
    }),
      r(this, d, g).call(this);
  }
}
(d = new WeakSet()),
  (g = function () {
    const e = window.matchMedia(this._options.breakpoint),
      t = (i) => {
        i.matches ? this._options.onEnter() : this._options.onLeave();
      };
    e.addEventListener("change", t), t(e);
  });
const D = getComputedStyle(document.documentElement).getPropertyValue(
  "--breakpoint-sp"
);
function N() {
  const n = new F(),
    e = document.querySelector(".js-global-menu"),
    t = document.querySelector(".js-global-menu-button"),
    i = new T({
      buttonElement: t,
      menuElement: e,
      onEnter: () => {
        n.fixed();
      },
      onLeave: () => {
        n.unfixed();
      },
    });
  i.enable();
  function o() {
    i.disable(), i.enable(), n.unfixed();
  }
  new q({ breakpoint: D, onEnter: () => o(), onLeave: () => o() });
}
document.addEventListener("DOMContentLoaded", () => {
  k(), new x(), M(), O(), N();
});

let current = 0;
const slides = document.querySelectorAll(".p-main-visual__slide");

function showSlide(index) {
  console.log("object");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);

const headerName = document.querySelector(".l-header__name");

function handleScrollForMobile() {
  if (window.innerWidth <= 768) {
    if (window.scrollY > 50) {
      headerName.classList.add("is-visible");
    } else {
      headerName.classList.remove("is-visible");
    }
  } else {
    headerName.classList.remove("is-visible");
  }
}

window.addEventListener("scroll", handleScrollForMobile);
window.addEventListener("resize", handleScrollForMobile);
