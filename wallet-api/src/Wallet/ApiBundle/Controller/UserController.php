<?php

namespace Wallet\ApiBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Wallet\ApiBundle\Entity\User;
use Wallet\ApiBundle\Form\UserType;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class UserController
 *
 * @Route("/user")
 *
 * @package Wallet\ApiBundle\Controller
 */
class UserController extends APIControllerAbstract
{

    /**
     * Create new user request
     *
     * @Route("/")
     * @Method({"POST"})
     */
    public function createUserAction(Request $request)
    {
        $user = new User();
        $post = $this->getJsonFromRequest($request);
        $this->populateEntityFromArray($user, $post);
        $errors = $this->validateEntity($user);
        if (!empty($errors)) {
            return $this->errorResponse($errors);
        }

        return $this->successResponse($errors);
    }

    /**
     * Authenticate user with login and password
     *
     * @Route("/auth")
     * @Method({"POST"})
     */
    public function authenticateUserAction(Request $request)
    {
        exit(__METHOD__);
    }

    /**
     * Get user data by user id
     *
     * @Route("/{id}", requirements={"id" = "\d+"})
     * @Method({"GET"})
     */
    public function getUserByIdAction($id, Request $request)
    {
        exit(__METHOD__);
    }
}
