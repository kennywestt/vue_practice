// TypeScript 에서 provide/inject 데이터의 타입을 안전하게
// 추론하기 위해 Symbol을 사용하여 injection key를 정의

import type { InjectionKey, Ref } from 'vue';

// provide('key', value) : 상위 컴포넌트에서 데이터를 하위 트리에 제공
// inject('key') : 하위 컴포넌트에서 상위 컴포넌트가 제공한 데이터를 받아 사용
export interface ThemeContext {
    theme: Ref<string>;
    toggleTheme: () => void;
}

// 타입 안정성 : TypeScript 환경에서는 InjectionKey<T>를 정의하여 제공
// 주입하는 데이터의 타입을 안전하게 맞춤
export const ThemeKey: InjectionKey<ThemeContext> = Symbol('ThemeKey')
