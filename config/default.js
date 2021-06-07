module.exports = {
  exec: {
    scripts: {
      "init-cam": {
        run: "sudo service uv4l_raspicam restart",
      },
      test: {
        run: 'echo "this is a script test"',
      },
      "template-test": {
        run: 'echo "this is <%= name %>"',
      },
    },
  },
};
