import { onMounted, onUnmounted, ref } from "vue";

export function useScreen() {
  const isMobile = ref(window.innerWidth < 992);

  const fn = () => {
    isMobile.value = window.innerWidth < 992;
  };

  onMounted(() => {
    window.addEventListener("resize", fn);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", fn);
  });

  return {
    isMobile,
  };
}
