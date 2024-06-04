/** @jsx jsx */
import { jsx } from '@emotion/core'

export const ChevronRight = ({ className, style, title, ...otherAttr }) => {
    return (
      <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" style={style} {...otherAttr}
           xmlns="http://www.w3.org/2000/svg">
        <title>{title}</title>
          <path id="Vector"
                d="M12.7275 9.08419L7.46094 13.7577C7.09693 14.0808 6.50832 14.0808 6.14818 13.7577L5.27301 12.9811C4.909 12.6581 4.909 12.1357 5.27301 11.8162L9.00605 8.50344L5.27301 5.19072C4.909 4.8677 4.909 4.34536 5.27301 4.02577L6.14431 3.24227C6.50832 2.91924 7.09693 2.91924 7.45707 3.24227L12.7236 7.91581C13.0915 8.23883 13.0915 8.76117 12.7275 9.08419Z"
                />
      </svg>
    )
}
