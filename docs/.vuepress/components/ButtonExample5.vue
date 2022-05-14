<template>
  <gv-row>
    <gv-col>
      <gv-form-group label="Single and Required">
        <gv-button-group sm v-model="single_selection" required>
          <gv-button>
            <gv-icon value="format-align-left" />
          </gv-button>
          <gv-button>
            <gv-icon value="format-align-center" />
          </gv-button>
          <gv-button>
            <gv-icon value="format-align-right" />
          </gv-button>
          <gv-button>
            <gv-icon value="format-align-justify" />
          </gv-button>
        </gv-button-group>
      </gv-form-group>
    </gv-col>

    <gv-col>
      <gv-form-group label="No Selection">
        <gv-button-group>
          <gv-button>Add</gv-button>
          <gv-button>Update</gv-button>
        </gv-button-group>
      </gv-form-group>
    </gv-col>

    <gv-col>
      <gv-form-group label="Multiple">
        <gv-button-group lg v-model="multiple_selection" multiple>
          <gv-button>
            <gv-icon value="format-bold" />
          </gv-button>
          <gv-button active>
            <gv-icon value="format-italic" />
          </gv-button>
          <gv-button>
            <gv-icon value="format-underline" />
          </gv-button>
        </gv-button-group>
      </gv-form-group>
    </gv-col>
  </gv-row>
</template>

<script>
export default {
  data() {
    return {
      single_selection: null,
      multiple_selection: [0]
    };
  }
};
</script>
