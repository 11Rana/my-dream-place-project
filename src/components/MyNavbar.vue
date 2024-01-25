<template>
  <nav class="mb-14">
    <div class="flex SF Pro Display items-center justify-between h-3">
      <div class="flex bg-transparent h-11 items-center mt-8 p-4 py-7 pt-11 w-full">
        <div class="flex-shrink-0">
          <!-- Logo -->
          <img @click="$router.push('/LogedInHome')" class="h-32 w-32 ml-24 cursor-pointer" :src="logoSrc" alt="Logo">
        </div>
        <div class="hidden md:block mr-8">
          <div v-show="showLinks" class="ml-60 flex items-baseline space-x-12">
            <!-- Navigation links -->
            <a :class="linkClass">Home</a>
            <a :class="linkClass">Discover</a>
            <a :class="linkClass">Activities</a>
            <a :class="linkClass">About</a>
            <a :class="linkClass">Contact</a>
          </div>
        </div>

        <!-- Register Button -->
        <button @click="navigateToRegister" v-show="showButton"
          class="text-white bg-Blue rounded-md text-xs font-medium font-defaultFont px-3.5 py-2 ml-72">Register</button>

        <!-- Profile -->
        <div class="flex absolute" style="margin-left: 1271px;">
          <img v-show="showNotification" class="h-18 w-18  mr-7" :src="notificationSrc" alt="notification">
          <div @click="toggleDropdown" v-show="showProfile" class="w-18 h-18 cursor-pointer rounded-full overflow-hidden">
            <img class="object-cover mb-0 w-full h-full" src="../images/Person.svg" alt="Image" />
          </div>
        </div>

        <!-- Drop Down -->
        <div v-if="isDropdownOpen" class="absolute ml-m17 mt-60 w-48 bg-white drop-shadow-3xl rounded-md">
          <ul class="py-2">
            <li class="px-4 py-2">
              <img class="h-4 w-4 mt-ng4 mr-2 inline justify-center" src="../images/user-square 2.svg" />
              <p class="inline mt-2 font-normal font-defaultFont text-sm text-Gray2 justify-center">Settings</p>
            </li>
            <hr class="border-Gray3">

            <li @click="navigateToMyTrips" class="px-4 py-2 cursor-pointer">
              <img class="h-4 w-4 mt-ng4 mr-2 inline justify-center" src="../images/bxs-plane-take-off 1.svg" />
              <p class="inline mt-2 font-normal font-defaultFont text-sm text-Gray2 justify-center">My trips</p>
            </li>
            <hr class="border-Gray3">

            <li class="px-4 py-2">
              <img class="h-4 w-4 mt-ng4 mr-2 inline justify-center" src="../images/wallet-3 1.svg" />
              <p class="inline mt-2 font-normal font-defaultFont text-sm text-Gray2 justify-center">Reward and wallet</p>
            </li>
            <hr class="border-Gray3">

            <li @click="logout" class="px-4 py-2 cursor-pointer">
              <img class="h-4 w-4 mt-ng4 mr-2 inline justify-center" src="../images/logout 1.svg" />
              <p class="inline mt-2 font-normal font-defaultFont text-sm text-Gray2 justify-center">Sign out</p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
  data() {
    return {
      isDropdownOpen: false,
    };
  },

  props: {
    showLinks: {
      type: Boolean,
      default: true
    },
    showButton: {
      type: Boolean,
      default: true
    },
    showNotification: {
      type: Boolean,
      default: true
    },
    showProfile: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: 'text-Gray1',
    },
    logoSrc: {
      type: String,
      required: true,
    },
    notificationSrc: {
      type: String,
      required: true,
    },
  },

  computed: {
    linkClass() {
      return ['px-3', 'py-2', 'rounded-md', 'text-xs', 'font-medium', 'font-defaultFont', this.textColor];
    },
  },

  methods: {
    navigateToRegister() {
      this.$router.push('/register');
    },

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    navigateToMyTrips() {
      this.$router.push('/mytrips');
    },

    logout() {
      this.$router.push('/');
    },
  }
}
</script>