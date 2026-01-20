# Design Tokens

This library exposes the design system tokens as CSS Custom Properties. Import the compiled CSS in your app styles to make the tokens available at runtime.

## Usage

Include the tokens file once in your global styles (already wired in the showroom app via the build styles array).

Tokens are scoped to `:root` and to `[data-theme="light"]` / `[data-theme="dark"]` to enable runtime theme switching.
