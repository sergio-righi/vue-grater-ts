<template>
  <gv-discussion>
    <template #content>
      <gv-discussion-item
        v-for="item in items"
        :key="item.id"
        :header="item.header"
        :avatar="item.avatar"
      >
        <template #control>
          <gv-icon value="thumb-up" />
          <gv-icon value="thumb-down" />
          <gv-icon value="reply-circle" />
        </template>
        <template #content v-if="item.children">
          <gv-discussion-item
            v-for="child in item.children"
            :key="child.id"
            :avatar="child.avatar"
            :header="child.header"
          >
            <template #control>
              <gv-icon value="thumb-up" />
              <gv-icon value="thumb-down" />
              <gv-icon value="reply-circle" />
            </template>
            <template #content  v-if="child.children">
              <gv-discussion-item
                v-for="grandchild in child.children"
                :key="grandchild.id"
                :avatar="grandchild.avatar"
                :header="grandchild.header"
              >
                <template #control>
                  <gv-icon value="thumb-up" />
                  <gv-icon value="thumb-down" />
                </template>
              </gv-discussion-item>
            </template>
          </gv-discussion-item>
        </template>
      </gv-discussion-item>
    </template>
  </gv-discussion>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          avatar: "/img/user_f.png",
          header:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          children: [
            {
              id: 2,
              avatar: "/img/user_m.png",
              header:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              children: [
                {
                  id: 5,
                  avatar: "D",
                  header:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                  id: 6,
                  avatar: "/img/user_f.png",
                  header:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              ]
            },
            {
              id: 3,
              avatar: "X",
              header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            },
            {
              id: 4,
              avatar: "M",
              header: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
          ]
        }
      ]
    };
  }
};
</script>
