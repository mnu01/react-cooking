export default {
    build(...route: string[]) {
        return `${this.BASE_URL}${route.join('')}`;
    },

    BASE_URL: 'http://localhost:8888',
    RECIPES: '/recipes'
}