<template>
  <gv-row>
    <gv-col :sm="6">
      <gv-card>
        <template #content>
          <gv-placeholder>
            <gv-col>
              <gv-placeholder-item image></gv-placeholder-item>
            </gv-col>
            <gv-col :xs="4">
              <gv-placeholder-align horizontal>
                <gv-placeholder-item avatar></gv-placeholder-item>
              </gv-placeholder-align>
            </gv-col>
            <gv-col :xs="8">
              <gv-placeholder-align vertical>
                <gv-placeholder-group>
                  <gv-placeholder-row class="col-10"></gv-placeholder-row>
                  <gv-placeholder-row class="col-6"></gv-placeholder-row>
                </gv-placeholder-group>
              </gv-placeholder-align>
            </gv-col>
            <gv-col>
              <gv-placeholder-item gap></gv-placeholder-item>
              <gv-placeholder-group>
                <gv-placeholder-row class="col-6"></gv-placeholder-row>
                <gv-placeholder-row class="col-2" empty></gv-placeholder-row>
                <gv-placeholder-row class="col-4"></gv-placeholder-row>
              </gv-placeholder-group>
            </gv-col>
          </gv-placeholder>
        </template>
      </gv-card>
    </gv-col>
    <gv-col :sm="6">
      <gv-card>
        <template #content>
          <gv-placeholder>
            <gv-col>
              <gv-placeholder-item image></gv-placeholder-item>
              <gv-placeholder-row class="col-7" thick></gv-placeholder-row>
              <gv-placeholder-row class="col-10"></gv-placeholder-row>
              <gv-placeholder-row class="col-8"></gv-placeholder-row>
              <gv-placeholder-row class="col-6"></gv-placeholder-row>
            </gv-col>
          </gv-placeholder>
        </template>
      </gv-card>
    </gv-col>
  </gv-row>
</template>