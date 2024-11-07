{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        squads-client = pkgs.mkYarnPackage {
          name = "squads-client";
          src = ./.;
          packageJSON = ./package.json;
          yarnLock = ./yarn.lock;
          nodejs = pkgs.nodejs_latest;
        };

        shell = pkgs.mkShell {
          inputsFrom = [ squads-client ];

          buildInputs = [
            pkgs.rustup
            pkgs.anchor
          ] ++ (pkgs.lib.optionals pkgs.stdenv.isDarwin [
            pkgs.iconv
            pkgs.libiconv
          ]);
        };
      in
      {
        packages = {
          inherit squads-client;
          default = squads-client;
        };

        devShells.default = shell;
      }
    );
}
