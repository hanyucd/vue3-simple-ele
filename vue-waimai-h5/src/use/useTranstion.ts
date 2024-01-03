import { ref } from 'vue';
import { useTimeout } from './useTimeout';
import { useLifeHooks } from './useLifeHooks';

interface IEnterItem {
  isShown: boolean,
  el: HTMLElement
}

export function useTransition(count = 10) {
  // 确实在setup的时机执行声明周期函数
  const { onUnmounted } = useLifeHooks()
  const createItems = (_count: number) => {
    const result = []
    for(let i = 0; i < _count; i++) {
      result.push({
        isShown: false,
        el: {} as HTMLElement
      })
    }
    return result
  }
  
  const items = ref(createItems(count))
  const enterItems = [] as IEnterItem[]
  const start = (el: HTMLElement) => {
    const item = items.value.find(v => !v.isShown)
    if(item) {
      item.isShown = true
      item.el = el
      enterItems.push(item)
    }
  }
  
  const beforeEnter = (el: Element) => {
    const item = enterItems[enterItems.length - 1]
    const rect = item.el.getBoundingClientRect()
    const x = rect.left - 32
    const y = -(window.innerHeight - rect.top - 22)
    ;(el as HTMLElement).style.display = ''
    ;(el as HTMLElement).style.transform = `translate3d(0, ${y}px, 0)`

    const inner = el.getElementsByClassName('inner')[0] as HTMLElement
    if(inner) {
      inner.style.transform = `translate3d(${x}px, 0, 0)`
    }
  }
  
  const enter = (el: Element, done: () => void) => {
    el.addEventListener('transitionend', done)
    useTimeout(() => {
      (el as HTMLElement).style.transform = `translate3d(0, 0, 0)`
      const inner = el.getElementsByClassName('inner')[0] as HTMLElement
      if(inner) {
        inner.style.transform = `translate3d(0, 0, 0)`
      }
    }, undefined, onUnmounted)
  }

  const afterEnter = (el: Element) => {
    const item = enterItems.shift()
    if(item) {
      item.isShown = false
      ;(el as HTMLElement).style.display = 'none'
    }
  }

  return {
    items,
    start,
    beforeEnter,
    enter,
    afterEnter
  }
}