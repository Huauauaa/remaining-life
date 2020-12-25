import { Options, Vue } from 'vue-class-component';

@Options({
  props: {},
})
export default class HelloWorld extends Vue {
  birth: Date = new Date();

  idealAge = 100;

  get pastYear() {
    return new Date().getFullYear() - this.birth.getFullYear();
  }
}
