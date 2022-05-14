<template>
  <gv-row>
    <gv-col :sm="6">
      <gv-card bg="teal" color="white" border="teal-400">
        <template #header>
          <gv-link href="#">configuration</gv-link>
          <gv-icon value="heart" color="red" class="ml-auto" />
        </template>
        <template #content>
          <gv-image src="/img/landscape/img_13.jpg">
            <gv-position overlay>
              Lorem ipsum dolor sit amet
            </gv-position>
          </gv-image>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            consequat odio. Suspendisse sit amet nibh id nibh vestibulum
            facilisis.
          </p>
          <gv-divider />
        </template>
        <template #footer>
          <gv-tile>
            <template #trailing>
              <gv-avatar>
                <gv-image src="/img/user_f.png" />
              </gv-avatar>
            </template>
            <template #content>
              <gv-tile-header sub> Lorem ipsum dolor sit amet </gv-tile-header>
              <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
            </template>
          </gv-tile>
        </template>
      </gv-card>
    </gv-col>

    <gv-col :sm="6">
      <gv-card>
        <template #header>
          <gv-tile>
            <template #leading>
              <gv-icon value="airplane" size="24px" />
            </template>
            <template #content>
              <gv-tile-header>Lorem ipsum dolor sit amet</gv-tile-header>
              <gv-tile-header sub>Lorem ipsum dolor sit amet</gv-tile-header>
            </template>
            <template #trailing>
              <gv-dropdown left>
                <template #trigger>
                  <gv-icon value="dots-vertical" />
                </template>
                <template #content>
                  <gv-dropdown-item>German</gv-dropdown-item>
                  <gv-dropdown-item>
                    <a href="#">French</a>
                  </gv-dropdown-item>
                  <gv-dropdown-item>
                    <a href="#">Italian</a>
                  </gv-dropdown-item>
                  <gv-dropdown-item>Spanish</gv-dropdown-item>
                </template>
              </gv-dropdown>
            </template>
          </gv-tile>
        </template>
        <template #content>
          <gv-image src="/img/landscape/img_7.jpg" zoom>
            <gv-position color="white" top md overlay>
              Lorem ipsum dolor sit amet
            </gv-position>
          </gv-image>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            consequat odio. Suspendisse sit amet nibh id nibh vestibulum
            facilisis.
          </p>
        </template>
        <template #footer>
          <gv-link href="#">Configuration</gv-link>
          <gv-link href="#">Update</gv-link>
          <div class="ml-auto">
            <gv-icon value="heart" color="red" />
            <gv-icon value="share" />
          </div>
        </template>
      </gv-card>
    </gv-col>
  </gv-row>
</template>
