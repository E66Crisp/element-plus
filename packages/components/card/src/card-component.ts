import { defineComponent, h, useSlots } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useGlobalConfig } from '@element-plus/components/config-provider'
import { CardProps, cardProps } from './card'

import type { Ref, Slots } from 'vue'
import type { CardConfigContext } from './card'

// defineComponent 写法
// export default defineComponent({
//     name: 'ElCard',
//     props: cardProps,
//     setup(props, { slots }: SetupContext) {
//         const ns = useNamespace('card')
//         const globalConfig = useGlobalConfig('card')

//         return () => {
//             const shadowClass = ns.is(
//                 `${props.shadow || globalConfig.value?.shadow || 'always'}-shadow`
//             )

//             // Header 渲染
//             const headerNode =
//                 slots.header || props.header
//                     ? h(
//                         'div',
//                         { class: [ns.e('header'), props.headerClass], onClick: props.headerEvent },
//                         slots.header ? renderSlot(slots, 'header') : props.header
//                     )
//                     : null

//             // Body 渲染
//             const bodyNode = h(
//                 'div',
//                 {
//                     class: [ns.e('body'), props.bodyClass],
//                     style: props.bodyStyle,
//                 },
//                 renderSlot(slots, 'default')
//             )

//             // Footer 渲染
//             const footerNode =
//                 slots.footer || props.footer
//                     ? h(
//                         'div',
//                         { class: [ns.e('footer'), props.footerClass] },
//                         slots.footer ? renderSlot(slots, 'footer') : props.footer
//                     )
//                     : null

//             // 根节点
//             return h('div', { class: [ns.b(), shadowClass] }, [
//                 headerNode,
//                 bodyNode,
//                 footerNode,
//             ])
//         }
//     },
// })

// function 写法
interface CardRenderContext {
  props: CardProps
  slots: Slots
  ns: ReturnType<typeof useNamespace>
  globalConfig: Ref<CardConfigContext | undefined>
}

/**
 * 组件渲染函数
 * @param param0
 * @returns
 */
function CardComponent({ props, slots, ns, globalConfig }: CardRenderContext) {
  const shadowClass = ns.is(
    `${props.shadow || globalConfig.value?.shadow || 'always'}-shadow`
  )

  // Header 渲染（只有存在内容时才渲染）
  const headerNode =
    slots.header || props.header
      ? h(
          'div',
          { class: [ns.e('header'), props.headerClass] },
          slots.header ? slots.header() : props.header
        )
      : null

  // Body 渲染
  const bodyNode = h(
    'div',
    { class: [ns.e('body'), props.bodyClass], style: props.bodyStyle },
    slots.default?.()
  )

  // Footer 渲染（只有存在内容时才渲染）
  const footerNode =
    slots.footer || props.footer
      ? h(
          'div',
          { class: [ns.e('footer'), props.footerClass] },
          slots.footer ? slots.footer() : props.footer
        )
      : null

  // 根节点
  return h('div', { class: [ns.b(), shadowClass] }, [
    headerNode,
    bodyNode,
    footerNode,
  ])
}

export default defineComponent({
  name: 'ElCard',
  props: cardProps,
  setup(props) {
    // hooks 必须在 setup 中调用
    const ns = useNamespace('card')
    const globalConfig = useGlobalConfig('card')
    const slots = useSlots()
    return () => CardComponent({ props, slots, ns, globalConfig })
  },
})
