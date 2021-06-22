import bus from "../utils/bus"

export default {
    //컴포넌트 옵션
    mounted() {
        bus.$emit('end:spinner');
    }
}