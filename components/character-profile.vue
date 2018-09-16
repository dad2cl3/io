<template>
  <v-container class="ma-0 pa-0 local-container" fluid grid-list-xl>
    <v-card flat class="ma-0 pa-0">
      <v-container class="ma-0 pa-0" fluid>
        <v-layout class="ma-0" row wrap justify-center justify-space-around>
          <!-- left column -->
          <v-card flat class="ma-0 py-0 item-group">
            <div class="item-container">
              <div class="item py-2" v-for='(item, i) in character.items.slice(0,6)' :key='item.instance_id'>
                <v-layout row>
                  <div class='item-icon-container'>
                    <img class="item-icon" :src='`${item.item_icon}`'></img>
                    <v-layout row class='mx-0 my-0'>
                      <!-- <img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></img> -->
                      <v-img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></v-img>
                      <div class='item-light'>{{ item.stat_light }}</div>
                    </v-layout>
                  </div>
                  <div class='item-details'>
                    <div class='item-name'>{{ item.item_name }}</div>
                    <div class='item-type'>{{ item.bucket_name }}</div>
                    <v-layout row class="item-sockets-container">
                      <div class='item-sockets' v-for='socket in item.sockets' :key='socket.socket_name'>
                        <!-- <img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></img> -->
                        <v-img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></v-img>
                      </div>
                    </v-layout>
                  </div>
                </v-layout>
              </div>
            </div>
          </v-card>
          <!-- right column -->
          <v-card flat class="ma-0 py-0 item-group">
            <div class="item-container">
              <div class="item py-2" v-for='(item, i) in character.items.slice(6,12)' :key='item.instance_id'>
                <v-layout row>
                  <div class='item-icon-container'>
                    <img class="item-icon" :src='`${item.item_icon}`'></img>
                    <!-- <v-img class="item-icon" :src='`${item.item_icon}`'></v-img> -->
                    <v-layout row class='mx-0 my-0'>
                      <!-- <img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></img> -->
                      <v-img class='damage-icon' :src='`${item.damage_icon}`' v-if='item.damage_name'></v-img>
                      <div class='item-light'>{{ item.stat_light }}</div>
                    </v-layout>
                  </div>
                  <div class='item-details'>
                    <div class='item-name'>{{ item.item_name }}</div>
                    <div class='item-type'>{{ item.bucket_name }}</div>
                    <v-layout row class="item-sockets-container">
                      <div class='item-sockets' v-for='socket in item.sockets' :key='socket.socket_name'>
                        <!-- <img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></img> -->
                        <v-img class='item-socket' :src='`${socket.socket_icon}`' :title='`${socket.socket_name}`'></v-img>
                      </div>
                    </v-layout>
                  </div>
                </v-layout>
              </div>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-card>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        /* characters: [
          {
            character: '2305843009264369876',
            background: 'https://www.bungie.net/common/destiny2_content/icons/673459e64c4a712f87ef2e7967c2d9aa.jpg',
            emblem: 'https://www.bungie.net/common/destiny2_content/icons/5b200fb32e8056ef355e639f39972349.jpg',
            class: 'Titan',
            race: 'Exo',
            gender: 'Male',
            level: 25,
            light: 307,
            'items': [
              {
                'bucket_hash': 3284755031,
                'bucket_name': 'Subclass',
                'bucket_description': 'Your abilities.',
                'item_hash': 3382391785,
                'item_name': 'Sentinel',
                'item_description': 'Valiant heart, unwavering resolve.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/926190b64d9e98f845d720112ac85e11.png',
                'instance_id': '6917529029413551403',
                'sockets': [
                  {
                    'socket_name': 'Towering Barricade',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/340443bd2fbb1e463e73c2ec3a1d16c4.png'
                  },
                  {
                    'socket_name': 'Strafe Lift',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/67428e3d4915aa7d015576b44621febc.png'
                  },
                  {
                    'socket_name': 'Suppressor Grenade',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/60a359bb8e0ed7edbcc69ff4a817b0cf.png'
                  },
                  {
                    'socket_name': 'Sentinel Shield',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/e5bdfd47a81e481e9375b6e377d416a4.png'
                  },
                  {
                    'socket_name': 'Defensive Strike',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/ea6697cf3bbf5b31faddc88388a245a1.png'
                  },
                  {
                    'socket_name': 'Rallying Force',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/0de65a1bd4c007b63b2a2a5ea8e1bbf3.png'
                  },
                  {
                    'socket_name': 'Turn the Tide',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/4c71f71dd2e8294b7d2db90a9be08671.png'
                  },
                  {
                    'socket_name': 'Ward of Dawn',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/949543a1afe5a42ca74e4a0eb8e681e9.png'
                  }
                ]
              },
              {
                'bucket_hash': 1498876634,
                'bucket_name': 'Kinetic Weapons',
                'bucket_description': 'Weapons that deal kinetic damage. Most effective when dealing with unshielded enemies.',
                'item_hash': 1644162710,
                'item_name': 'Origin Story',
                'item_description': 'Your inciting incident is their tragic ending.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/6becbbf1377e2e95fd130635eadca613.jpg',
                'instance_id': '6917529031853710846',
                'damage_hash': 3373582085,
                'damage_name': 'Kinetic',
                'damage_description': 'This weapon causes Kinetic damage.',
                'damage_icon': 'https://www.bungie.net/img/destiny_content/damage_types/destiny2/kinetic_large.png',
                'stat_hash': 1480404414,
                'stat_light': 299,
                'stat_name': 'Attack',
                'stat_description': 'Higher Attack allows your weapons to damage higher-level opponents.',
                'sockets': [
                  {
                    'socket_hash': 1636108362,
                    'socket_name': 'Precision Frame',
                    'socket_description': 'This weapon\'s recoil pattern is more predictably vertical.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/c7ecd77df1a7367c191d4dd0c77fc681.png'
                  },
                  {
                    'socket_hash': 13792278,
                    'socket_name': 'Hitmark IS',
                    'socket_description': 'Agile sight. Short zoom. \n  •  Greatly increases handling speed\n  •  Slightly increases range',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/48f05876d1c03fc89c65f16ddfd54428.png'
                  },
                  {
                    'socket_hash': 1087426260,
                    'socket_name': 'Appended Mag',
                    'socket_description': 'This weapon\'s magazine is built for higher capacity.\n  •  Increases magazine size',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/8ee9114cb1a26f40d23694b0c1410f8c.png'
                  },
                  {
                    'socket_hash': 3425386926,
                    'socket_name': 'Rampage',
                    'socket_description': 'Kills with this weapon temporarily grant increased damage. Stacks 3x.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/78e534df7fabe779449bb048349a14ab.png'
                  },
                  {
                    'socket_hash': 4160547565,
                    'socket_name': 'Kinetic Damage Mod',
                    'socket_description': 'Equip this to a weapon to change its rounds to Kinetic damage.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/6d13421214a794798619877c184e9036.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 236077174,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This weapon can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 2465295065,
                'bucket_name': 'Energy Weapons',
                'bucket_description': 'Weapons that deal Arc, Solar, or Void damage. Most effective when dealing with shielded enemies.',
                'item_hash': 3393130645,
                'item_name': 'Positive Outlook',
                'item_description': 'Lead by example.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/85d578ba2b0ffa055ed1d311067bda28.jpg',
                'instance_id': '6917529046257105126',
                'damage_hash': 3454344768,
                'damage_name': 'Void',
                'damage_description': 'This weapon causes Void damage.',
                'damage_icon': 'https://www.bungie.net/img/destiny_content/damage_types/destiny2/void_large.png',
                'stat_hash': 1480404414,
                'stat_light': 301,
                'stat_name': 'Attack',
                'stat_description': 'Higher Attack allows your weapons to damage higher-level opponents.',
                'sockets': [
                  {
                    'socket_hash': 1636108362,
                    'socket_name': 'Precision Frame',
                    'socket_description': 'This weapon\'s recoil pattern is more predictably vertical.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/c7ecd77df1a7367c191d4dd0c77fc681.png'
                  },
                  {
                    'socket_hash': 1409978311,
                    'socket_name': 'Jolt PS',
                    'socket_description': 'Omolon Post sights. Short zoom. Increases range. Slightly increases handling speed',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/b22c310e7b15b11d79a72261419e9625.png'
                  },
                  {
                    'socket_hash': 3142289711,
                    'socket_name': 'Accurized Rounds',
                    'socket_description': 'This weapon can fire longer distances. Increases range',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/932e52e4861f8a06b165d4bf0d09dd8f.png'
                  },
                  {
                    'socket_hash': 1015611457,
                    'socket_name': 'Kill Clip',
                    'socket_description': 'Reloading after a kill grants increased damage.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/a491ede2965c4d128dd14065b5501f65.png'
                  },
                  {
                    'socket_hash': 3728733956,
                    'socket_name': 'Void Damage Mod',
                    'socket_description': 'Equip this to a weapon to charge its rounds with Void energy.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/3cf38f8671df5bf79be405861d2eb3d6.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 236077174,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This weapon can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 953998645,
                'bucket_name': 'Power Weapons',
                'bucket_description': 'Machine guns and rocket launchers.',
                'item_hash': 3748713779,
                'item_name': 'Morrigan-D',
                'item_description': 'Your domain is the battlefield. Its ways are your ways.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/86d3aee6e925369a76c4228b9ce491d9.jpg',
                'instance_id': '6917529033964369710',
                'damage_hash': 3454344768,
                'damage_name': 'Void',
                'damage_description': 'This weapon causes Void damage.',
                'damage_icon': 'https://www.bungie.net/img/destiny_content/damage_types/destiny2/void_large.png',
                'stat_hash': 1480404414,
                'stat_light': 317,
                'stat_name': 'Attack',
                'stat_description': 'Higher Attack allows your weapons to damage higher-level opponents.',
                'sockets': [
                  {
                    'socket_hash': 216781713,
                    'socket_name': 'Häkke Precision Frame',
                    'socket_description': 'This weapon fires a small auto-tracking missile. Missiles lock onto targets when aimed.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/c7ecd77df1a7367c191d4dd0c77fc681.png'
                  },
                  {
                    'socket_hash': 1844523823,
                    'socket_name': 'Confined Launch',
                    'socket_description': 'This weapon\'s launch parameters are particularly stable. Greatly increases stability. Increases blast radius\n  •  Decreases projectile speed',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/8c76738203b064b113eb05003d71c18a.png'
                  },
                  {
                    'socket_hash': 2822142346,
                    'socket_name': 'High-Velocity Rounds',
                    'socket_description': 'This weapon\'s projectiles are particularly light and quick.\n  •  Increases projectile speed\n  •  Increases reload speed',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/fd32a2b47f8ff5ee26f57ecbfa4b8ee4.png'
                  },
                  {
                    'socket_hash': 957782887,
                    'socket_name': 'Snapshot Sights',
                    'socket_description': 'Faster time to aim down sights.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/5b204c8a14ba30e2431c567baff46c09.png'
                  },
                  {
                    'socket_hash': 1837294881,
                    'socket_name': 'Void Damage Mod',
                    'socket_description': 'Equip this to a weapon to charge its rounds with Void energy.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/76bcafb3d12eb3309203a6dfafb5b392.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 236077174,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This weapon can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 4023194814,
                'bucket_name': 'Ghost',
                'bucket_description': 'Shells used by your assistant and guide, the Ghost.',
                'item_hash': 1843730201,
                'item_name': 'Kill-Tracker Ghost',
                'item_description': 'For Ghosts who want to brag about the achievements of their Guardians.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/2ae2382ba7cca3c080c2256b121fa8ce.jpg',
                'instance_id': '6917529029826426507',
                'sockets': [
                  {
                    'socket_hash': 4138317986,
                    'socket_name': 'Vanguard Kill Tracker',
                    'socket_description': 'Allows your Ghost to track your kills against the City\'s enemies.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/92bc242ebf55d5dfce09703d23bcd6a6.png'
                  },
                  {
                    'socket_hash': 727110355,
                    'socket_name': 'Crucible Kill Tracker',
                    'socket_description': 'Allows your Ghost to track kills in the Crucible.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/004d55a5da7f86a20724f01739a31373.png'
                  },
                  {
                    'socket_hash': 1626532497,
                    'socket_name': 'Arc Weapon Analyzer',
                    'socket_description': 'Generate Gunsmith telemetry data on Arc weapon kills.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/5fa15e3fa6653636df50fb0e7f84bf90.png'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  }
                ]
              },
              {
                'bucket_hash': 2025709351,
                'bucket_name': 'Vehicle',
                'bucket_description': 'Surface vehicles at your disposal.',
                'item_hash': 807458182,
                'item_name': 'Dinas Emrys',
                'item_description': '\'Watch for the red dragon. Here\'s a hint: It\'ll be ahead of you.\' —Ariadne Gris',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/d91e53af196f0b024da571b877edb7aa.jpg',
                'instance_id': '6917529033608955118',
                'stat_hash': 1501155019,
                'stat_light': 160,
                'stat_name': 'Speed',
                'stat_description': 'How fast this vehicle travels over land.',
                'sockets': [
                  {
                    'socket_hash': 1284563764,
                    'socket_name': 'Noble Constant Red',
                    'socket_description': 'Equip this shader to change the color of your gear.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/83d5cae8d150c30ce22fdc74af1b0211.jpg'
                  },
                  {
                    'socket_hash': 2978337238,
                    'socket_name': 'Custom Drive',
                    'socket_description': 'An expertly tuned NLS drive, providing the best possible performance.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/75dd3a7f76dfa8eb46a1b7d60918ef4f.png'
                  },
                  {
                    'socket_hash': 1662439581,
                    'socket_name': 'Air Control',
                    'socket_description': 'Increased agility while airborne.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/45efc007281196500143a6a33ccb5626.png'
                  }
                ]
              },
              {
                'bucket_hash': 3448274439,
                'bucket_name': 'Helmet',
                'bucket_description': 'Helmets and hoods.',
                'item_hash': 160388292,
                'item_name': 'Kerak Type 2',
                'item_description': 'They look to you for inspiration. Be brave.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/fe3c4ab116b1d9f8e45382ca51d405e7.jpg',
                'instance_id': '6917529031270854500',
                'stat_hash': 3897883278,
                'stat_light': 310,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.',
                'sockets': [
                  {
                    'socket_hash': 2000319334,
                    'socket_name': 'Restorative Titan Armor',
                    'socket_description': 'RESTORATIVE TITAN ARMOR\nImproved recovery.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/1ddf43adc2c5dc10ad526cbd0ac299a5.png'
                  },
                  {
                    'socket_hash': 1633794450,
                    'socket_name': 'Mobility Enhancement Mod',
                    'socket_description': 'Increased Mobility',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/300a46fd98113799e895b7e3509053e5.png'
                  },
                  {
                    'socket_hash': 3612913507,
                    'socket_name': 'Void Paragon Mod',
                    'socket_description': '',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/f2aa0aad91f4beae9eb981d944bcb0da.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 1176735155,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This armor can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 3551918588,
                'bucket_name': 'Gauntlets',
                'bucket_description': 'Gloves and gauntlets.',
                'item_hash': 957928253,
                'item_name': 'Exodus Down Gauntlets',
                'item_description': '\'Captain, the orbit of 7066 Nessus is different from what Cosmodrome calculated.\' —Flight Officer Samantha Blaise',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/42d676d12711a4d760c24b7a459e0e83.jpg',
                'instance_id': '6917529031803388031',
                'stat_hash': 3897883278,
                'stat_light': 305,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.',
                'sockets': [
                  {
                    'socket_hash': 2823081959,
                    'socket_name': 'Heavy Titan Armor',
                    'socket_description': 'HEAVY TITAN ARMOR\nImproved resilience.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/f79b382028aa6a378bbed59574a40fc9.png'
                  },
                  {
                    'socket_hash': 3530997750,
                    'socket_name': 'Plasteel Reinforcement Mod',
                    'socket_description': 'Increased Resilience.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/23bcf23b60a1a16e0bd8444c401d1c4b.png'
                  },
                  {
                    'socket_hash': 1024610936,
                    'socket_name': 'Void Impact Mod',
                    'socket_description': '',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9c19f848743f2f2005c25b3e1b6054de.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 1176735155,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This armor can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 14239492,
                'bucket_name': 'Chest Armor',
                'bucket_description': 'Cuirasses, jackets, and vestments.',
                'item_hash': 2696303651,
                'item_name': 'Kerak Type 2',
                'item_description': 'These worlds have need for your might. Stand strong.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/ee96fc4754ef4a1427994dce6e5dcf3c.jpg',
                'instance_id': '6917529031850432169',
                'stat_hash': 3897883278,
                'stat_light': 305,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.',
                'sockets': [
                  {
                    'socket_hash': 2936258449,
                    'socket_name': 'Restorative Titan Armor',
                    'socket_description': 'RESTORATIVE TITAN ARMOR\nImproved recovery.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/1ddf43adc2c5dc10ad526cbd0ac299a5.png'
                  },
                  {
                    'socket_hash': 3530997750,
                    'socket_name': 'Plasteel Reinforcement Mod',
                    'socket_description': 'Increased Resilience.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/23bcf23b60a1a16e0bd8444c401d1c4b.png'
                  },
                  {
                    'socket_hash': 861147786,
                    'socket_name': 'Void Paragon Mod',
                    'socket_description': '',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/f2aa0aad91f4beae9eb981d944bcb0da.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 1176735155,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This armor can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 20886954,
                'bucket_name': 'Leg Armor',
                'bucket_description': 'Greaves and leggings.',
                'item_hash': 1902412292,
                'item_name': 'Mk. 44 Stand Asides',
                'item_description': 'Pardon me. Coming through.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/c56aa6b0d7cb9a294fdf954ff514d24b.jpg',
                'instance_id': '6917529048024022362',
                'stat_hash': 3897883278,
                'stat_light': 320,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.',
                'sockets': [
                  {
                    'socket_hash': 824488952,
                    'socket_name': 'Seriously, Watch Out',
                    'socket_description': 'SERIOUSLY, WATCH OUT\nGrants an overshield when sprinting at full health with Seismic Strike, Hammer Strike, or Shield Bash equipped. Hits with these abilities recharge a portion of your melee energy.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/e38dceaa5e5cfa14a294e8849920a361.png'
                  },
                  {
                    'socket_hash': 1633794450,
                    'socket_name': 'Mobility Enhancement Mod',
                    'socket_description': 'Increased Mobility',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/300a46fd98113799e895b7e3509053e5.png'
                  },
                  {
                    'socket_hash': 359660595,
                    'socket_name': 'Acceleration Mod',
                    'socket_description': '',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/f7151d58b85fecb41ac405764c546cc1.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  }
                ]
              },
              {
                'bucket_hash': 1585787867,
                'bucket_name': 'Class Armor',
                'bucket_description': 'Marks, bonds, and cloaks.',
                'item_hash': 1712405061,
                'item_name': 'Wildwood Mark',
                'item_description': 'Devrim Kay fashioned the pattern for these Guardian armor suits.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/b5e611fb85d9997f0db58264c41e8023.jpg',
                'instance_id': '6917529031261346785',
                'stat_hash': 3897883278,
                'stat_light': 305,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.',
                'sockets': [
                  {
                    'socket_hash': 3131975519,
                    'socket_name': 'Power Munition Loader',
                    'socket_description': '',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/d4fd8a6508e8993f2bb978b8682a668f.jpg'
                  },
                  {
                    'socket_hash': 4248210736,
                    'socket_name': 'Default Shader',
                    'socket_description': 'Restores your gear to its default colors.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/7f5dfa533202545b6bf62f3a91a39102.png'
                  },
                  {
                    'socket_hash': 1176735155,
                    'socket_name': 'Masterwork Upgrade',
                    'socket_description': 'This armor can be upgraded into a Masterwork with one of the options below.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/9e69bee0119ec7297f0e81d372d24c56.png'
                  }
                ]
              },
              {
                'bucket_hash': 284967655,
                'bucket_name': 'Ships',
                'bucket_description': 'Spacecraft at your disposal.',
                'item_hash': 4209989370,
                'item_name': 'Captain Nemo',
                'item_description': 'Nobody ventured farther.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/83d77563d022c984d342cb139622cac5.jpg',
                'instance_id': '6917529032368008859',
                'sockets': [
                  {
                    'socket_hash': 1284563763,
                    'socket_name': 'VEIST Poison Shimmer',
                    'socket_description': 'Equip this shader to change the color of your gear.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/e2793966c62d76fc2ba544107d4ff047.jpg'
                  },
                  {
                    'socket_hash': 1281013979,
                    'socket_name': 'Coral Rabbit',
                    'socket_description': 'Modifications for your ship\'s transmat systems, so you\'ll always arrive in style.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/de69362319a3cb9a56eae2838216cb55.jpg'
                  }
                ]
              }
            ]
          },
          {
            character: '2305843009264369877',
            background: 'https://www.bungie.net/common/destiny2_content/icons/e452c62485491a02fbc0e36f06d301d2.jpg',
            emblem: 'https://www.bungie.net/common/destiny2_content/icons/5dc023c8be5d682eae90be7f5d420f69.jpg',
            class: 'Hunter',
            race: 'Exo',
            gender: 'Male',
            level: 1,
            light: 100,
            'items': [
              {
                'bucket_hash': 1498876634,
                'bucket_name': 'Kinetic Weapons',
                'bucket_description': 'Weapons that deal kinetic damage. Most effective when dealing with unshielded enemies.',
                'item_hash': 53159280,
                'item_name': 'Traveler\'s Chosen',
                'item_description': 'A City-made sidearm, built for those chosen by the Traveler to become Guardians.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/136dca04c483083128c19c5b3b2b1d5d.jpg',
                'instance_id': '6917529029369216222',
                'damage_hash': 3373582085,
                'damage_name': 'Kinetic',
                'damage_description': 'This weapon causes Kinetic damage.',
                'damage_icon': 'https://www.bungie.net/img/destiny_content/damage_types/destiny2/kinetic_large.png',
                'stat_hash': 1480404414,
                'stat_light': 100,
                'stat_name': 'Attack',
                'stat_description': 'Higher Attack allows your weapons to damage higher-level opponents.',
                'sockets': [
                  {
                    'socket_hash': 1294026524,
                    'socket_name': 'Adaptive Frame',
                    'socket_description': 'A well-rounded grip, reliable and sturdy.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/5903b9d190bf6225c7d9f534201f7fa3.png'
                  },
                  {
                    'socket_hash': 445755707,
                    'socket_name': 'QuickDot SAS',
                    'socket_description': 'Agile Sidearm sight. \n  •  Greatly increases handling speed\n  •  Slightly increases stability',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/db828d92003438b055386c7beb8bf9ae.png'
                  }
                ]
              },
              {
                'bucket_hash': 3448274439,
                'bucket_name': 'Helmet',
                'bucket_description': 'Helmets and hoods.',
                'item_hash': 3285934677,
                'item_name': 'Daring Hunter Mask',
                'item_description': 'Go forth, wanderer. Enjoy the journey.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/9ab0628c6ad2b56eac6aeda15aaaa02d.jpg',
                'instance_id': '6917529029369216229',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 3551918588,
                'bucket_name': 'Gauntlets',
                'bucket_description': 'Gloves and gauntlets.',
                'item_hash': 1961777956,
                'item_name': 'Daring Hunter Grips',
                'item_description': 'All you need is a good gun and a fast ride.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/43632a486e585efb1497a051833dbe4f.jpg',
                'instance_id': '6917529029369216226',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 14239492,
                'bucket_name': 'Chest Armor',
                'bucket_description': 'Cuirasses, jackets, and vestments.',
                'item_hash': 3640744220,
                'item_name': 'Daring Hunter Vest',
                'item_description': '\'Rules are for Titans and Warlocks. Hunters? Not so much.\' —Cayde-6, Hunter Vanguard',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/762cc65c027e800eaad532b56dc434fc.jpg',
                'instance_id': '6917529029369216227',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 20886954,
                'bucket_name': 'Leg Armor',
                'bucket_description': 'Greaves and leggings.',
                'item_hash': 3892423886,
                'item_name': 'Daring Hunter Strides',
                'item_description': 'A Hunter\'s bootprints mark the outer edges of the known galaxy.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/2ecdee3a80f22e930a551025207da057.jpg',
                'instance_id': '6917529029369216230',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 1585787867,
                'bucket_name': 'Class Armor',
                'bucket_description': 'Marks, bonds, and cloaks.',
                'item_hash': 1056171153,
                'item_name': 'Daring Hunter Cloak',
                'item_description': 'Flip a coin. Heads, the Hunter wins. Tails, the other guy loses.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/b396e9b0df4508a7f33c0ab598834ab5.jpg',
                'instance_id': '6917529029369216228',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 4023194814,
                'bucket_name': 'Ghost',
                'bucket_description': 'Shells used by your assistant and guide, the Ghost.',
                'item_hash': 997920960,
                'item_name': 'Last City Shell',
                'item_description': 'For Ghosts who call the Last City home.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/09b5b412e6d0f6f9ee2e40290e8d8e80.jpg',
                'instance_id': '6917529029369216223'
              },
              {
                'bucket_hash': 3284755031,
                'bucket_name': 'Subclass',
                'bucket_description': 'Your abilities.',
                'item_hash': 3635991036,
                'item_name': 'Gunslinger',
                'item_description': 'A lone wolf who lives for the perfect shot.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/93f7d2578bc0cedd140809edf4dd0d2e.png',
                'instance_id': '6917529029369216231'
              },
              {
                'bucket_hash': 4274335291,
                'bucket_name': 'Emblems',
                'bucket_description': 'Emblems to display beside your name in Rosters and friends lists.',
                'item_hash': 1907674138,
                'item_name': 'Hunter\'s Wit',
                'item_description': '',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/5dc023c8be5d682eae90be7f5d420f69.jpg',
                'instance_id': '6917529029369216232'
              },
              {
                'bucket_hash': 3054419239,
                'bucket_name': 'Emotes',
                'bucket_description': 'Express yourself through Emotes.',
                'item_hash': 3400316022,
                'item_name': 'Point',
                'item_description': 'Over there...',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/e8c288be7a1c95371ba1baa67bc0b345.jpg',
                'instance_id': '6917529029369216225'
              }
            ]
          },
          {
            character: '2305843009264369878',
            background: 'https://www.bungie.net/common/destiny2_content/icons/73f5f779f40bfecb4690c395bc1941b9.jpg',
            emblem: 'https://www.bungie.net/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
            class: 'Warlock',
            race: 'Human',
            gender: 'Female',
            level: 1,
            light: 100,
            'items': [
              {
                'bucket_hash': 1498876634,
                'bucket_name': 'Kinetic Weapons',
                'bucket_description': 'Weapons that deal kinetic damage. Most effective when dealing with unshielded enemies.',
                'item_hash': 53159280,
                'item_name': 'Traveler\'s Chosen',
                'item_description': 'A City-made sidearm, built for those chosen by the Traveler to become Guardians.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/136dca04c483083128c19c5b3b2b1d5d.jpg',
                'instance_id': '6917529029369216234',
                'damage_hash': 3373582085,
                'damage_name': 'Kinetic',
                'damage_description': 'This weapon causes Kinetic damage.',
                'damage_icon': 'https://www.bungie.net/img/destiny_content/damage_types/destiny2/kinetic_large.png',
                'stat_hash': 1480404414,
                'stat_light': 100,
                'stat_name': 'Attack',
                'stat_description': 'Higher Attack allows your weapons to damage higher-level opponents.',
                'sockets': [
                  {
                    'socket_hash': 1294026524,
                    'socket_name': 'Adaptive Frame',
                    'socket_description': 'A well-rounded grip, reliable and sturdy.',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/5903b9d190bf6225c7d9f534201f7fa3.png'
                  },
                  {
                    'socket_hash': 445755707,
                    'socket_name': 'QuickDot SAS',
                    'socket_description': 'Agile Sidearm sight. \n  •  Greatly increases handling speed\n  •  Slightly increases stability',
                    'socket_icon': 'https://www.bungie.net/common/destiny2_content/icons/db828d92003438b055386c7beb8bf9ae.png'
                  }
                ]
              },
              {
                'bucket_hash': 3448274439,
                'bucket_name': 'Helmet',
                'bucket_description': 'Helmets and hoods.',
                'item_hash': 3081865122,
                'item_name': 'Wise Warlock Hood',
                'item_description': 'Your greatest weapon is your mind.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/567ba1358e11231ed78e1d91f0df4f47.jpg',
                'instance_id': '6917529029369214576',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 3551918588,
                'bucket_name': 'Gauntlets',
                'bucket_description': 'Gloves and gauntlets.',
                'item_hash': 2421406347,
                'item_name': 'Wise Warlock Gloves',
                'item_description': 'Your arsenal consists not just of guns and grenades—but of the universe\'s secrets.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/5963baf820fd850615e4a5e094290ee2.jpg',
                'instance_id': '6917529029369216238',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 14239492,
                'bucket_name': 'Chest Armor',
                'bucket_description': 'Cuirasses, jackets, and vestments.',
                'item_hash': 2209865285,
                'item_name': 'Wise Warlock Robes',
                'item_description': 'Warrior. Scholar. Warlocks are both.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/32680dbbb71ba9a5dddf40cd9bbe45cd.jpg',
                'instance_id': '6917529029369214574',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 20886954,
                'bucket_name': 'Leg Armor',
                'bucket_description': 'Greaves and leggings.',
                'item_hash': 3471587229,
                'item_name': 'Wise Warlock Boots',
                'item_description': 'Reality exists at your pleasure.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/b74d347dc23fa4c6a29086df8fe12c2d.jpg',
                'instance_id': '6917529029369214577',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 1585787867,
                'bucket_name': 'Class Armor',
                'bucket_description': 'Marks, bonds, and cloaks.',
                'item_hash': 1331814296,
                'item_name': 'Wise Warlock Bond',
                'item_description': '\'If you dedicate yourself to the study of the universe, it will always reveal its secrets to you.\' —Ikora Rey',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/397aff565cb416cfb9f415d80e4f4d21.jpg',
                'instance_id': '6917529029369214575',
                'stat_hash': 3897883278,
                'stat_light': 100,
                'stat_name': 'Defense',
                'stat_description': 'Reduces incoming damage from your enemies.'
              },
              {
                'bucket_hash': 4023194814,
                'bucket_name': 'Ghost',
                'bucket_description': 'Shells used by your assistant and guide, the Ghost.',
                'item_hash': 997920960,
                'item_name': 'Last City Shell',
                'item_description': 'For Ghosts who call the Last City home.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/09b5b412e6d0f6f9ee2e40290e8d8e80.jpg',
                'instance_id': '6917529029369216235'
              },
              {
                'bucket_hash': 3284755031,
                'bucket_name': 'Subclass',
                'bucket_description': 'Your abilities.',
                'item_hash': 3887892656,
                'item_name': 'Voidwalker',
                'item_description': 'From the smallest atoms bloom the greatest explosions.',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/c5b5afdb909226122d673faa1b4fa2b8.png',
                'instance_id': '6917529029369214578'
              },
              {
                'bucket_hash': 4274335291,
                'bucket_name': 'Emblems',
                'bucket_description': 'Emblems to display beside your name in Rosters and friends lists.',
                'item_hash': 1907674137,
                'item_name': 'Warlock\'s Flight',
                'item_description': '',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/911791e90f955fc637398ea88aba74b7.jpg',
                'instance_id': '6917529029369214579'
              },
              {
                'bucket_hash': 3054419239,
                'bucket_name': 'Emotes',
                'bucket_description': 'Express yourself through Emotes.',
                'item_hash': 3400316022,
                'item_name': 'Point',
                'item_description': 'Over there...',
                'item_icon': 'https://www.bungie.net/common/destiny2_content/icons/e8c288be7a1c95371ba1baa67bc0b345.jpg',
                'instance_id': '6917529029369216237'
              }
            ]

          }
        ] */
      }
    },
    props: ['character']
  }
</script>

<style scoped>

  .item {
    position: relative;
    padding: 0em;
    margin: 1em;
    height: 96px;
    width: 400px;
    border: 0;
    background-color: orange;
  }

  .item-icon-container {
    position: relative;
    left: 12px;
    top: 4px;
    padding: 0px;
    margin: 0px;
  }

  .item-icon {
    left: 12px;
    top: 4px;
    height: 96px;
    padding: 0px;
    margin: 0px;
  }

  .damage-icon {
    position: absolute;
    height: 17px;
    width: 17px;
    bottom: 6px;
    right: 30px;
    background-color: black;
    filter: brightness(2);
  }

  .item-light {
    position: absolute;
    display: block;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    bottom: 6px;
    right: 0px;
    line-height: 1em;
    background-color: black;
  }

  .item-details {
    position: absolute;
    color: white;
    left: 25%;
    top: 2%;
    height: 100%;
  }

  .item-name {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .item-type {
    font-size: 1.15rem;
  }

  .item-sockets-container {
    position: relative;
    left: 12%;
    top: 12%;

  }

  .item-sockets {
    position: relative;
    padding-right: 0.25em;
  }

  .item-socket {
    bottom: 2px;
    height: 30px;
    width: 30px;
  }

  @media all and (max-width: 600px) {
    .item {
      height: 80px;
      width: 90%;
      padding-top: 2px;
      padding-bottom: 2px;
    }

    .item-group {
      width: 100%;
    }

    .item-icon-container {
      position: relative;
    }

    .item-icon {
      height: 80px;
    }

    .item-details {
      position: absolute;
      color: white;
      left: 35%;
      top: 2%;
      height: 100%;
    }

    .item-name {
      font-size: 1.10rem;
      font-weight: bold;
    }

    .item-type {
      font-size: 1.0rem;
    }

    .item-sockets-container {
      position: relative;
      left: 12%;
      top: 20%;
    }

    .item-sockets {
      position: relative;

    }

    .item-socket {
      position: relative;
      height: 15px;
      width: 15px;
    }
  }
</style>