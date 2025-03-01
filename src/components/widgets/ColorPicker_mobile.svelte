<script>
  import { i18n } from "../../locales/translation";
  import key from "../../locales/keys";

    // 新增颜色配置常量
  const TEXT_L = 30;       // 文字基础明度（保持与--text-color一致）
  const TEXT_C = 0.07;     // 文字色度（比主色低50%保证可读性）
  const HOVER_C = 0.12;    // 悬停状态色度提升
  let hue = 140;
  let textColor = "var(--text-color)";
  let isHovered = false;

  function handleSliderChange(event) {
    hue = parseInt(event.target.value);
    document.documentElement.style.setProperty('--hue', hue);
    
    // 动态生成OKLCH颜色，根据状态切换色度
    textColor = `oklch(
      ${TEXT_L}% 
      ${isHovered ? HOVER_C : TEXT_C} 
      ${hue}
    )`;
  }
  
  // 初始化时设置文字颜色
  import { onMount } from 'svelte';
  
  onMount(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const currentHue = rootStyle.getPropertyValue('--hue').trim() || '140';
    
    // 从现有CSS变量继承参数
    const textColorVar = rootStyle.getPropertyValue('--text-color');
    const [_, baseL, baseC] = textColorVar.match(/oklch$(\d+)% (\d+\.\d+) \w+$/) || [];
    
    // 优先使用CSS变量值，其次用默认常量
    textColor = `oklch(
      ${baseL || TEXT_L}% 
      ${baseC || TEXT_C} 
      ${currentHue}
    )`;
  });
</script>

<div 
  class="theme-color-button"
  role="button"
  on:mouseenter={() => isHovered = true}
  on:mouseleave={() => isHovered = false}
>
  <button style="color: {textColor};">{i18n(key.theme_color_title1)}</button>
  {#if isHovered}
    <div class="slider-container">
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        on:input={handleSliderChange}
        class="hue-slider"
      />
    </div>
  {/if}
</div>

<style>
  @font-face {
      font-family: "Baloo 2";
      src: url("/Baloo2-Regular.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: "Baloo 2";
      src: url("/Baloo2-Bold.ttf") format("truetype");
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: "ChillRoundM";
      src: url("/ChillRoundM.ttf") format("truetype");
      font-weight: 400;
      font-style: normal;
    }
  .theme-color-button {
    position: relative;
    display: inline-block;
  }

  button {
    display: flex;
    width: auto;
    height: 26px;
    padding-top: -10px;
    font-family: 'ChillRoundM', sans-serif;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    font-size: 20px;
  }

  button:hover {
    background-color: var(--primary-color-hover);
    color: var(--primary-color-hover);
  }

  .slider-container {
    position: absolute;
    bottom: 60%;  /* 改为父元素顶部 */
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0.5rem;  /* 替换原来的margin-top */
    padding: 0.5rem;
    background-color: var(--card-color);
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .hue-slider {
    width: 180px;
    height: 24px;
    appearance: none;
    background: linear-gradient(
      to right,
      oklch(70% 0.15 0),     /* 0° 红 */
      oklch(90% 0.15 60),    /* 60° 黄 */
      oklch(70% 0.15 120),   /* 120° 绿 */
      oklch(70% 0.15 180),   /* 180° 青 */
      oklch(70% 0.15 240),   /* 240° 蓝 */
      oklch(70% 0.15 300),   /* 300° 品红 */
      oklch(70% 0.15 360)    /* 360° 红（闭环） */
    );
    border-radius: 0.25rem;
    outline: none;
    opacity: 0.9;
    transition: opacity 3s;
  }

  .hue-slider:hover {
    opacity: 1;
  }

  .hue-slider::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary-color-hover);
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .hue-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>
